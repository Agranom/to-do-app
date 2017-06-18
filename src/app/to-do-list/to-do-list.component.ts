import {Component, OnInit} from '@angular/core';
import {Task} from './task.interface';
import {Priority} from './priority.enum';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToDoTasksService} from "./to-do-tasks.service";
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass'],
})
export class ToDoListComponent implements OnInit {

  tasks: FirebaseListObservable<Task[]>;
  priorities = []
  isNewTask = false;
  currentDate = new Date();
  minDate = new Date();
  startDate = new Date();

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toDoTasksService: ToDoTasksService) {
    this.tasks = toDoTasksService.getTasks();
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: '1',
      date: [new Date(), Validators.required]
    });
    /**
     * Get list of priorities to set value for radio buttons
     * @return {number[]} Array of priorities
     */
    this.priorities = Object.keys(Priority).filter(priority => {
      return parseInt(priority, 10) >= 0;
    });
  }

  ngOnInit() {
  }

  toggleTaskForm(): void {
    this.isNewTask = !this.isNewTask;
  }

  addTask(task: Task): void {
    const newTask = Object.assign(task, {
      date: task.date.toISOString(),
      isCompleted: false
    });
    this.toDoTasksService.addTask(newTask)
      .then(() => this.toggleTaskForm());
  }

  editTask(key: string, task: Task): void {
    this.toDoTasksService.updateTask(key, task);
  }

  completeTask(key: string, status: boolean) {
    this.toDoTasksService.completeTask(key, status);
  }

  deleteTask(key: string): void {
    this.toDoTasksService.deleteTask(key);
  }

}
