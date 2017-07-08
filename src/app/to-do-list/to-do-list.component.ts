import {Component, OnInit} from '@angular/core';
import {Task} from './models/task.interface';
import {ToDoTasksService} from './to-do-tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass'],
})
export class ToDoListComponent implements OnInit {

  isNewTask = false;

  constructor(private toDoTasksService: ToDoTasksService) {

  }

  ngOnInit() {
  }

  toggleTaskForm(): void {
    this.isNewTask = !this.isNewTask;
  }

  addTask(task: Task): void {
    const newTask = Object.assign(task, {
      date: task.date.toISOString(),
      isCompleted: false
    });
    this.toDoTasksService.addTask(newTask)
      .then(() => this.toggleTaskForm());
  }

}
