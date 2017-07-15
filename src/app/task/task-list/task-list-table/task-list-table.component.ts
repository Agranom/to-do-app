import {AfterViewInit, Component, Input, OnInit, Pipe, ViewChild} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';
import {ToDoTasksService} from '../../services/to-do-tasks.service';
import {Task} from '../../models/task.interface';
import * as moment from 'moment';
import {MdSnackBar} from "@angular/material";


@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['./task-list-table.component.sass']
})
export class TaskListTableComponent implements OnInit {

  tasks: FirebaseListObservable<Task[]>;
  @Input() startDate: Date;
  @Input() endDate: Date;
  /**
   * Property for filter by category
   * @Input
   * @property {string} overdue - Show overdue tasks
   * @property {string} today - Show today tasks
   */
  @Input() filterProp: string;
  private minDate = new Date();

  constructor(private toDoTasksService: ToDoTasksService, private router: Router,
              private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.toDoTasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
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

  postponeTask(key: string, task: Task, newDate: Date): void {
    const newTask = Object.assign(task, {date: newDate.toUTCString()});
    setTimeout(() => this.toDoTasksService.updateTask(key, newTask)
      .then(() => {
        this.snackBar.open('Postponed', '', {
          duration: 1000
        });
      })
    );
  }

  private isTaskOverdue(taskDate: string): boolean {
    return moment(taskDate).isBefore(moment(), 'day');
  }

}
