import {Component, OnInit} from '@angular/core';
import {Task} from './task.interface';
import {ToDoTasksService} from './to-do-tasks.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass'],
})
export class ToDoListComponent implements OnInit {

  tasks: FirebaseListObservable<Task[]>;
  isNewTask = false;
  currentDate = new Date();
  isProcessing = false;


  constructor(private toDoTasksService: ToDoTasksService,
              private router: Router) {

  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.isProcessing = true;
    this.toDoTasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      setTimeout(() => this.isProcessing = false, 2000);
    });
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

  editTask(key: string, task: Task): void {
    this.toDoTasksService.updateTask(key, task);
  }

  completeTask(key: string, status: boolean) {
    this.toDoTasksService.completeTask(key, status);
  }

  deleteTask(key: string): void {
    this.toDoTasksService.deleteTask(key);
  }


  onSelect(task): void {
    this.router.navigate(['/task-details', task.$key]);
  }

}
