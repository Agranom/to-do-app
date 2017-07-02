import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {FormValidatorService} from '../../services/form-validator.service';
import {Priority} from '../priority.enum';
import {Task} from '../task.interface';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.sass']
})
export class TaskFormComponent implements OnInit, OnChanges {

  minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1);
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
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task']) {
      this.taskForm.patchValue({title: changes['task'].currentValue.title});
      this.taskForm.patchValue({description: changes['task'].currentValue.description});
      this.taskForm.patchValue({priority: changes['task'].currentValue.priority});
      this.taskForm.patchValue({date: new Date(changes['task'].currentValue.date)});
    }
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

