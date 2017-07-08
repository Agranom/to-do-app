import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';
import {ToDoTasksService} from '../../services/to-do-tasks.service';
import {Task} from '../../models/task.interface';

@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['./task-list-table.component.sass']
})
export class TaskListTableComponent implements OnInit {

  tasks: FirebaseListObservable<Task[]>;
  startDate: Date;
  endDate: Date;
  isProcessing = false;

  constructor(private toDoTasksService: ToDoTasksService, private router: Router) {
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
