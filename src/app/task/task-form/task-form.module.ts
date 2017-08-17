import {NgModule} from '@angular/core';

import {TaskFormComponent} from './task-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MdButtonModule, MdDatepickerModule, MdInputModule, MdRadioModule} from "@angular/material";
import {ToDoTasksService} from "../services/to-do-tasks.service";
import {FormValidatorService} from "../../services/form-validator.service";

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		MdButtonModule,
		MdInputModule,
		MdDatepickerModule,
		MdRadioModule
	],
	exports: [TaskFormComponent],
	declarations: [TaskFormComponent],
	providers: [ToDoTasksService, FormValidatorService],
})
export class TaskFormModule {
}
