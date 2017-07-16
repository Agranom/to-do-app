import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Task} from '../models/task.interface';
import {Config} from '../../config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class ToDoTasksService {

  private tasks: FirebaseListObservable<Task[]>;

  constructor(private afDatabase: AngularFireDatabase, private config: Config) {
  }

  getTasks(): FirebaseListObservable<Task[]> {
    this.tasks = this.afDatabase.list(this.config.TASKS);
    const tasks = this.tasks;
    return tasks;
  }

  getTask(key: string): Observable<Task> {
    return this.afDatabase.object(this.config.TASKS + `/${key}`);
  }

  addTask(task: Task) {
    return this.tasks.push(task);
  }

  updateTask(key: string, task: Task) {
    this.getTasks();
    return this.tasks.update(key, task);
  }

  deleteTask(key: string) {
    this.tasks.remove(key);
  }

  deleteCompletedTasks() {
    this.afDatabase.list(this.config.TASKS).subscribe(tasks => tasks.map(task => {
      if (task.isCompleted) {
        this.deleteTask(task.$key)
      }
    }))
  }

}
