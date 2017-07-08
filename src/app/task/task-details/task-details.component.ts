import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToDoTasksService} from '../services/to-do-tasks.service';
import {Task} from '../models/task.interface';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.sass']
})
export class TaskDetailsComponent implements OnInit {

  task: Task;
  taskKey: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private toDoTasksService: ToDoTasksService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
      this.taskKey = params.get('id');
        return this.toDoTasksService.getTask(params.get('id'));
      })
      .subscribe((task: Task) => this.task = task);
  }

  editTask(value): void {
    this.toDoTasksService.updateTask(this.taskKey, value)
      .then(() => this.router.navigate(['/task']));
  }

}
