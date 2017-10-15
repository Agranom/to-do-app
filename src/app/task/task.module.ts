import {NgModule} from '@angular/core';

import {TaskComponent} from './task.component';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from './task-list/task-list.component';
import {ToDoTasksService} from './services/to-do-tasks.service';
import {DateFilterPipe} from './task-list/pipes/date-filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskListTableComponent} from './task-list/task-list-table/task-list-table.component';
import {CategoryFilterPipe} from './task-list/pipes/category-filter.pipe';
import {TaskRoutingModule} from "./task.routing.module";
import {TaskFormModule} from "./task-form/task-form.module";
import {ConfirmDialogModule} from "../shared/confirm-dialog/confirm-dialog.module";
import {
	MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatInputModule, MatRadioModule,
	MatTabsModule, MatTooltipModule
} from "@angular/material";

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		MatInputModule,
		MatDatepickerModule,
		MatCheckboxModule,
		MatRadioModule,
		MatTabsModule,
		FormsModule,
		ReactiveFormsModule,
		TaskFormModule,
		TaskRoutingModule,
		ConfirmDialogModule
	],
	exports: [],
	declarations: [
		TaskComponent,
		TaskListComponent,
		DateFilterPipe,
		TaskListTableComponent,
		CategoryFilterPipe,
	],
	providers: [
		ToDoTasksService
	],
})
export class TaskModule {
}
