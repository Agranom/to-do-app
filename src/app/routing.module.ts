/**
 * Created by владимир on 03.06.2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskDetailsComponent} from './task/task-details/task-details.component';
import {TaskComponent} from './task/task.component';
import {CanDeactivateGuardService} from './shared/services/can-deactivate-guard.service';


const routes: Routes = [
  {path: '', redirectTo: '/task', pathMatch: 'full'},
  {path: 'task', component: TaskComponent},
  {path: 'task-details/:id', component: TaskDetailsComponent, canDeactivate: [CanDeactivateGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
