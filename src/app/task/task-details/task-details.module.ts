import {NgModule} from '@angular/core';

import {TaskDetailsComponent} from './task-details.component';
import {CommonModule} from '@angular/common';
import {TaskDetailsRoutingModule} from "./task-details.routing.module";
import {MdIconModule} from "@angular/material";
import {TaskFormModule} from "../task-form/task-form.module";
import {CanDeactivateGuardService} from "../../shared/services/can-deactivate-guard.service";
import {ConfirmDialogModule} from "../../shared/confirm-dialog/confirm-dialog.module";

@NgModule({
	imports: [
		CommonModule,
		MdIconModule,
		TaskFormModule,
		TaskDetailsRoutingModule,
		ConfirmDialogModule
	],
	exports: [],
	declarations: [TaskDetailsComponent],
	providers: [CanDeactivateGuardService],
})
export class TaskDetailsModule {
}
