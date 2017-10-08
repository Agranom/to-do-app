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

	addTask(task: Task) {
		const newTask = Object.assign(task, {
			date: task.date.toUTCString(),
			isCompleted: false
		});
		this.tasks.push(newTask);
		return this.tasks.snapshotChanges();
	}

	updateTask(key: string, task: Task): Observable<Task[]> {
		this.tasks.update(key, task);
		return this.tasks.valueChanges();
	}

	/*TODO: refactor this*/
	deleteTask(key: string) {
		this.tasks.remove(key);
		return this.tasks.snapshotChanges();
	}

	deleteCompletedTasks() {
		// this.afDatabase.list(this.config.TASKS).forEach(tasks => tasks.map(task => {
		//   if (task.isCompleted) {
		//     this.deleteTask(task.$key)
		//   }
		// }));
	}

}
