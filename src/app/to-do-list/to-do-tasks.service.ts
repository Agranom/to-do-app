import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Task} from './task.interface';
import {Config} from '../config';

@Injectable()
export class ToDoTasksService {

  private tasks: FirebaseListObservable<Task[]>;


  constructor(private afDatabase: AngularFireDatabase, private config: Config) {
  }

  getTasks() {
    this.tasks = this.afDatabase.list(this.config.TASKS);
    return this.tasks;
  }

  addTask(task: Task) {
    return this.tasks.push(task);
  }

  updateTask(key: string, task: Task) {
    this.tasks.update(key, task);
  }

  completeTask(key: string, status: boolean) {
    this.tasks.update(key, {isCompleted: status});
  }

  deleteTask(key: string) {
    this.tasks.remove(key);
  }

}
