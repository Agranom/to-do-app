import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Task} from './task.interface';

@Injectable()
export class ToDoTasksService {

  private tasks: FirebaseListObservable<Task[]>;


  constructor(private afDatabase: AngularFireDatabase) {
  }

  getTasks() {
    this.tasks = this.afDatabase.list('/tasks');
    return this.tasks;
  }

  addTask(task: Task) {
    return this.tasks.push(task);
  }

  updateTask(key: string, task: Task) {
    this.tasks.update(key, task);
  }

  deleteTask(key: string) {
    this.tasks.remove(key);
  }

}
