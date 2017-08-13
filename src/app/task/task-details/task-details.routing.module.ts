import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TaskDetailsComponent} from './task-details.component';
import {CanDeactivateGuardService} from "../../shared/services/can-deactivate-guard.service";

const routes: Routes = [
	{path: '', component: TaskDetailsComponent, canDeactivate: [CanDeactivateGuardService]},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TaskDetailsRoutingModule {
}
