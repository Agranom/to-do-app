import {Component, OnInit} from '@angular/core';
import {Task} from './task.interface';
import {Priority} from './priority.enum';
import {Observable} from 'rxjs/Observable';
import {FirebaseListObservable} from 'angularfire2/database';
import {HttpService} from '../services/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass'],
})
export class ToDoListComponent implements OnInit {

  priorities = []
  tasks: FirebaseListObservable<any[]>;
  isNewTask = false;

  taskForm: FormGroup;

  constructor(private http: HttpService, private formBuilder: FormBuilder) {
    this.tasks = this.http.getItems('/tasks');
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      priority: '1',
      date: ['', Validators.required]
    });
    this.priorities = Object.keys(Priority).filter(priority => {
      return parseInt(priority, 10) >= 0;
    });
  }

  ngOnInit() {
  }

  toggleTaskForm(): void {
    this.isNewTask = !this.isNewTask;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.toggleTaskForm();
  }

  editTask(key: string, task: Task) {
    this.tasks.update(key, task);
  }

  deleteTask(key: string): void {
    this.tasks.remove(key);
  }

}
