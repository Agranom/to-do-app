/**
 * Created by владимир on 03.06.2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaskDetailsComponent} from './task/task-details/task-details.component';
import {TaskComponent} from './task/task.component';


const routes: Routes = [
  {path: '', redirectTo: '/task', pathMatch: 'full'},
  {path: 'task', component: TaskComponent},
  {path: 'task-details/:id', component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
