import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToDoTasksService} from '../../services/to-do-tasks.service';
import {Task} from '../../models/task.interface';
import * as moment from 'moment';
import {MdDialog, MdSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../../shared/confirm-dialog/confirm-dialog.component';
import {DataSource} from '@angular/cdk';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
	selector: 'app-task-list-table',
	templateUrl: './task-list-table.component.html',
	styleUrls: ['./task-list-table.component.sass']
})
export class TaskListTableComponent implements OnInit {

	tasks: Task[];
	index = 0;
	@Input() startDate: Date;
	@Input() endDate: Date;
	/**
	 * Property for filter by category
	 * @Input
	 * @property {string} overdue - Show overdue tasks
	 * @property {string} today - Show today tasks
	 */
	@Input() filterProp: string;
	minDate = new Date();

	constructor(private toDoTasksService: ToDoTasksService, private router: Router,
				private snackBar: MdSnackBar, private dialog: MdDialog) {
	}

	// ngOnInit() {
	// 	this.getTasks();
	// }

	@HostListener('window:pagehide')
	onPageHide() {
		this.toDoTasksService.deleteCompletedTasks();
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
		this.dialog.open(ConfirmDialogComponent).afterClosed()
			.subscribe(response => {
				if (response) {
					this.toDoTasksService.deleteTask(key);
				}
			});
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

	isTaskOverdue(taskDate: string): boolean {
		return moment(taskDate).isBefore(moment(), 'day');
	}

	displayedColumns = ['title', 'priority', 'completed', 'date', 'actions', 'postpone'];
	exampleDatabase = new ExampleDatabase(this.toDoTasksService);
	dataSource: ExampleDataSource | null;

	ngOnInit() {
		// this.getTasks();
		this.dataSource = new ExampleDataSource(this.exampleDatabase);
	}

}

const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
	'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
	'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
	'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
	id: string;
	name: string;
	progress: string;
	color: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
	/** Stream that emits whenever the data has been modified. */
		// dataChange: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
		// get data(): Task[] { return this.dataChange.value; }
	tasksnew: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
	tasks: Task[];

	constructor(private toDoTasksService: ToDoTasksService) {
		// this.addUser();
		// this.toDoTasksService.getTasks().subscribe(tasks => this.tasks = tasks);
		this.toDoTasksService.getTasks().subscribe(tasks => {
			this.tasks = tasks;
			this.tasksnew.next(this.tasks);
		});
	}

	/** Adds a new user to the database. */
	// addUser() {
	// 	const copiedData = this.data.slice();
	// 	copiedData.push(this.createNewUser());
	// 	this.dataChange.next(copiedData);
	// }
	//
	// /** Builds and returns a new User. */
	// private createNewUser() {
	// 	const name =
	// 		NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
	// 		NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
	//
	// 	return {
	// 		id: (this.data.length + 1).toString(),
	// 		name: name,
	// 		progress: Math.round(Math.random() * 100).toString(),
	// 		color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
	// 	};
	// }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
	constructor(private _exampleDatabase: ExampleDatabase) {
		super();
	}

	/** Connect function called by the table to retrieve one stream containing the data to render. */
	connect(): Observable<Task[]> {
		return this._exampleDatabase.tasksnew;
	}

	disconnect() {
	}
}
