import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Task} from '../models/task.interface';
import {Config} from '../../config';
import 'rxjs/add/observable/of';
import {Observable} from "rxjs/Observable";


@Injectable()
export class ToDoTasksService {

	private tasks: AngularFireList<Task>;

	constructor(private afDatabase: AngularFireDatabase, private config: Config) {
		this.tasks = this.afDatabase.list<Task>(this.config.TASKS);
	}

	getTasks(): Observable<Task[]> {
		return this.tasks.snapshotChanges()
			.map(actions => actions.map(action => {
				const $key = action.payload.key;
				return {$key, ...action.payload.val()};
			}));
	}

	getTask(key: string): Observable<Task> {
		return this.afDatabase.object<Task>(this.config.TASKS + `/${key}`)
			.valueChanges();
	}

	addTask(task: Task): Observable<any> {
		const newTask = Object.assign(task, {
			date: task.date.toUTCString(),
			isCompleted: false
		});
		return Observable.fromPromise(this.tasks.push(newTask));
	}

	updateTask(key: string, task: Task): Observable<any> {
		return Observable.fromPromise(this.tasks.update(key, task));
	}

	deleteTask(key: string): Observable<any> {
		return Observable.fromPromise(this.tasks.remove(key));
	}

	deleteCompletedTasks(): void {
		this.tasks.snapshotChanges().forEach(tasks => tasks
			.filter(task => task.payload.val().isCompleted)
			.forEach(completedTask => this.tasks.remove(completedTask.payload.key)));
	}

}
