import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import {Task} from '../models/task.interface';
import {Config} from '../../config';
import 'rxjs/add/observable/of';


@Injectable()
export class ToDoTasksService {

  private tasks: AngularFireList<Task>;

  constructor(private afDatabase: AngularFireDatabase, private config: Config) {
  }

  getTasks(): AngularFireList<Task> {
    this.tasks = this.afDatabase.list<Task>(this.config.TASKS);
    return this.tasks;
  }

  getTask(key: string): AngularFireObject<Task> {
    return this.afDatabase.object<Task>(this.config.TASKS + `/${key}`);
  }

  addTask(task: Task) {
    this.tasks.push(task);
    return this.tasks.snapshotChanges();
  }

  updateTask(key: string, task: Task) {
    // this.getTasks();
    this.tasks.update(key, task);
    return this.tasks.snapshotChanges();
  }

  deleteTask(key: string) {
    this.tasks.remove(key);
    return this.tasks.snapshotChanges();
  }

  deleteCompletedTasks() {
    // this.afDatabase.list(this.config.TASKS).forEach(tasks => tasks.map(task => {
    //   if (task.isCompleted) {
    //     this.deleteTask(task.$key)
    //   }
    // }));
  }

}
