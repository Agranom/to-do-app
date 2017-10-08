import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToDoTasksService} from '../services/to-do-tasks.service';
import {Task} from '../models/task.interface';
import 'rxjs/add/operator/switchMap';
import {TaskFormComponent} from '../task-form/task-form.component';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {Observable} from 'rxjs/Observable';
import {Subscription} from "rxjs/Subscription";


@Component({
	selector: 'app-task-details',
	templateUrl: './task-details.component.html',
	styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {

	task: Observable<Task>;
	taskKey: string;
	@ViewChild('taskForm') taskForm: TaskFormComponent;
	subscription: Subscription;

	constructor(private route: ActivatedRoute, private router: Router,
				private toDoTasksService: ToDoTasksService,
				private dialog: MatDialog) {
	}

	ngOnInit() {
		this.task = this.route.paramMap
			.switchMap((params: ParamMap) => {
				this.taskKey = params.get('id');
				return this.toDoTasksService.getTask(this.taskKey);
			})
	}

	editTask(task): void {
		this.subscription = this.toDoTasksService.updateTask(this.taskKey, task)
			.subscribe(() => {
				this.taskForm.taskForm.markAsPristine();
				this.router.navigate(['/task']);
			})
	}

	back(): void {
		this.router.navigate(['../']);
	}

	canDeactivate(): boolean | Observable<boolean> {
		if (!this.task || !this.taskForm.taskForm.dirty) {
			return true;
		}

		return this.dialog.open(ConfirmDialogComponent).afterClosed();
	}

	ngOnDestroy() {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
