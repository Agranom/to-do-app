import {AfterViewInit, Component, Input, OnDestroy, OnInit, Pipe, ViewChild} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';
import {ToDoTasksService} from '../../services/to-do-tasks.service';
import {Task} from '../../models/task.interface';
import * as moment from 'moment';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['./task-list-table.component.sass']
})
export class TaskListTableComponent implements OnInit, OnDestroy {

  tasks: Task[];
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

  ngOnDestroy() {
    // this.toDoTasksService.deleteCompletedTasks().subscribe((tasks) => {
    //   tasks.forEach(task => {
    //     if (task.isCompleted === true) {
    //       this.toDoTasksService.deleteTask(task.$key);
    //     }
    //   })
    // });
    // this.toDoTasksService.deleteCompletedTasks().subscribe(tasks => {
    //   console.log(`Destroy if dired`);
    //   tasks.map(task => {
    //     this.deleteTask(task.$key);
    //   })
    // });
    console.log(`Destroy`);
    // this.toDoTasksService.deleteCompletedTasks();
    this.deleteCompleted();
    this.deleteCompleted2();
  }

  getTasks(): void {
    this.toDoTasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  completeTask(key: string, status: boolean) {
    this.toDoTasksService.updateTask(key, {isCompleted: status} as Task)
  }

  deleteTask(key: string): void {
    this.toDoTasksService.deleteTask(key);
  }

  deleteCompleted() {
    console.log('Fired')
  }

  deleteCompleted2() {
    this.toDoTasksService.deleteCompletedTasks()
  }

  onSelect(task): void {
    this.router.navigate(['/task-details', task.$key]);
  }

  postponeTask(key: string, newDate: Date): void {
    setTimeout(() => this.toDoTasksService.updateTask(key, {date: newDate} as Task)
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
