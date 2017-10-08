import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToDoTasksService} from '../services/to-do-tasks.service';
import {Task} from '../models/task.interface';
import 'rxjs/add/operator/switchMap';
import {TaskFormComponent} from '../task-form/task-form.component';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {Observable} from 'rxjs/Observable';


@Component({
	selector: 'app-task-details',
	templateUrl: './task-details.component.html',
	styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit {

	task: Task;
	taskKey: string;
	@ViewChild('taskForm') taskForm: TaskFormComponent;

	constructor(private route: ActivatedRoute, private router: Router,
				private toDoTasksService: ToDoTasksService,
				private dialog: MatDialog) {
	}

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) => {
				this.taskKey = params.get('id');
				return this.toDoTasksService.getTask(params.get('id')).valueChanges();
			})
			.subscribe((task: Task) => this.task = task);
	}

	editTask(task): void {
		this.toDoTasksService.updateTask(this.taskKey, task)
			.subscribe(() => {
					this.taskForm.taskForm.markAsPristine();
					this.router.navigate(['/task']);
				}, (error) => console.log(error));
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
}
