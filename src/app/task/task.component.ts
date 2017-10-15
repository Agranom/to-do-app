import {Component} from '@angular/core';
import {Task} from './models/task.interface';
import {ToDoTasksService} from './services/to-do-tasks.service';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.sass'],
})
export class TaskComponent {

	isNewTask = false;

	constructor(private toDoTasksService: ToDoTasksService) {

	}

	toggleTaskForm(): void {
		this.isNewTask = !this.isNewTask;
	}

	addTask(task: Task): void {
		this.toDoTasksService.addTask(task)
			.subscribe(() => this.toggleTaskForm());
	}
}
