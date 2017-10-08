import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToDoTasksService} from '../../services/to-do-tasks.service';
import {Task} from '../../models/task.interface';
import * as moment from 'moment';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../../shared/confirm-dialog/confirm-dialog.component';
import {Observable} from "rxjs/Observable";


@Component({
	selector: 'app-task-list-table',
	templateUrl: './task-list-table.component.html',
	styleUrls: ['./task-list-table.component.sass']
})
export class TaskListTableComponent implements OnInit {

	tasks: Observable<Task[]>;
	currentDate = new Date();
	@Input() startDate: Date;
	@Input() endDate: Date;
	/**
	 * Property for filter by category
	 * @Input
	 * @property {string} overdue - Show overdue tasks
	 * @property {string} today - Show today tasks
	 */
	@Input() filterProp: string;

	constructor(private toDoTasksService: ToDoTasksService, private router: Router,
				private snackBar: MatSnackBar, private dialog: MatDialog) {
	}

	ngOnInit() {
		this.tasks = this.toDoTasksService.getTasks();
	}

	@HostListener('window:pagehide')
	onPageHide() {
		this.toDoTasksService.deleteCompletedTasks();
	}

	completeTask(key: string, status: boolean) {
		this.toDoTasksService.updateTask(key, {isCompleted: status} as Task).subscribe()
	}

	deleteTask(key: string): void {
		this.dialog.open(ConfirmDialogComponent).afterClosed()
			.subscribe(response => {
				if (response) {
					this.toDoTasksService.deleteTask(key).subscribe();
				}
			});
	}

	onSelect(task): void {
		this.router.navigate(['/task-details', task.$key]);
	}

	postponeTask(key: string, newDate: Date): void {
		this.toDoTasksService.updateTask(key, <Task>{date: newDate})
			.subscribe(() => {
				this.snackBar.open('Postponed', '', {
					duration: 1000
				});
			});
	}

	isTaskOverdue(taskDate: string): boolean {
		return moment(taskDate).isBefore(moment(), 'day');
	}

}
