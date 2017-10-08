import {Component, OnInit} from '@angular/core';
import {Task} from './models/task.interface';
import {ToDoTasksService} from './services/to-do-tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass'],
})
export class TaskComponent implements OnInit {

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
      date: task.date.toUTCString(),
      isCompleted: false
    });
    this.toDoTasksService.addTask(newTask)
      .subscribe(() => this.toggleTaskForm());
  }

}
