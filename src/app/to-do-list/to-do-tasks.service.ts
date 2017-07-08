import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Task} from './models/task.interface';
import {Config} from '../config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ToDoTasksService {

  private tasks: FirebaseListObservable<Task[]>;

  constructor(private afDatabase: AngularFireDatabase, private config: Config) {
  }

  getTasks(): Observable<any> {
    this.tasks = this.afDatabase.list(this.config.TASKS);
    return Observable.of(this.tasks);
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

  completeTask(key: string, status: boolean) {
    this.tasks.update(key, {isCompleted: status});
  }

  deleteTask(key: string) {
    this.tasks.remove(key);
  }

}
