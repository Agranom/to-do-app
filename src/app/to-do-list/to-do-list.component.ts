import {Component, OnInit} from '@angular/core';
import {Task} from './task.interface';
import {Priority} from './priority.enum';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToDoTasksService} from './to-do-tasks.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {FormValidatorService} from "../services/form-validator.service";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass'],
})
export class ToDoListComponent implements OnInit {

  tasks: FirebaseListObservable<Task[]>;
  priorities = [];
  isNewTask = false;
  currentDate = new Date();
  /*TODO: fix bug with locale*/
  minDate = new Date();
  startDate = new Date();
  submitted = false;

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toDoTasksService: ToDoTasksService,
              private formValidatorService: FormValidatorService) {

  }

  ngOnInit() {
    this.tasks = this.toDoTasksService.getTasks();
    this.buildForm();
  }

  buildForm(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(55)]],
      description: ['', Validators.maxLength(255)],
      priority: '1',
      date: [this.currentDate, Validators.required]
    });

    /**
     * Get list of priorities to set value for radio buttons
     * @return {number[]} Array of priorities
     */
    this.priorities = Object.keys(Priority).filter(priority => {
      return parseInt(priority, 10) >= 0;
    });
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

  onSubmit(): void {
    this.submitted = true;
    this.taskForm.markAsDirty();
    console.log(this.taskForm.get('date').valid);
    if (this.taskForm.valid) {
      this.addTask(this.taskForm.value);
    }
  }

  getValidatorMessage(control: AbstractControl, name: string) {
    return this.formValidatorService.getValidatorMessage(control, name);
  }

}
