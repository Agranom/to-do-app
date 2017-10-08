import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {FormValidatorService} from '../../services/form-validator.service';
import {Priority} from '../shared/priority.enum';
import {Task} from '../models/task.interface';
import {expiredDateValidator} from '../../form-validators/form-validators';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.sass']
})
export class TaskFormComponent implements OnInit, OnChanges {

  startDate = new Date();
  isSubmitted = false;
  taskForm: FormGroup;
  priorities = [];
  @Input() buttonText: string;
  @Input() task: Task;
  @Output() onSubmitted = new EventEmitter();
  private currentDate = new Date();

  constructor(private formBuilder: FormBuilder, private formValidatorService: FormValidatorService) {
    this.buildForm();

    for (let obj in Priority) {
      this.priorities.push(Priority[obj]);
    }
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(55)]],
      description: ['', Validators.maxLength(255)],
      priority: Priority.NORMAL,
      date: [this.currentDate, [Validators.required, expiredDateValidator()]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task'] && changes['task'].currentValue) {
      this.taskForm.patchValue({title: changes['task'].currentValue.title});
      this.taskForm.patchValue({description: changes['task'].currentValue.description});
      this.taskForm.patchValue({priority: changes['task'].currentValue.priority});
      this.taskForm.patchValue({date: new Date(changes['task'].currentValue.date)});
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.taskForm.markAsDirty();
    if (this.taskForm.valid) {
      this.onSubmitted.emit(this.taskForm.value);
    }
  }

  getValidatorMessage(control: AbstractControl, name: string) {
    return this.formValidatorService.getValidatorMessage(control, name);
  }
}

