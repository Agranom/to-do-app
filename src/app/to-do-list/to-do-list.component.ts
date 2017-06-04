import {Component, OnInit} from '@angular/core';
import {Task} from './task.interface';
import {Observable} from 'rxjs/Observable';
import {FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass'],
})
export class ToDoListComponent implements OnInit {

  user: Observable<any>;
  tasks: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth,
              private http: HttpService) {
    this.tasks = this.http.getItems('/tasks');
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  login(): void {
    this.afAuth.auth.signInAnonymously();
  }

  logout(): void {
    this.afAuth.auth.signOut();
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  editTask(key: string, task: Task) {
    this.tasks.update(key, task);
  }

  deleteTask(key: string): void {
    this.tasks.remove(key);
  }

}
