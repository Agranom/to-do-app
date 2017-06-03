import {Component, OnInit} from '@angular/core';
import {Task} from './task.interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass']
})
export class ToDoListComponent implements OnInit {

  tasks: Task[];

  constructor() {
    this.tasks = [
      {title: 'My first task', description: 'this is my first task', priority: 3, date: new Date}
    ];
  }

  ngOnInit() {
  }

}
