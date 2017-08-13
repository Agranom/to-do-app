/**
 * Created by владимир on 03.06.2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/task', pathMatch: 'full'},
  {path: 'task', loadChildren: './task/task.module#TaskModule'},
  {path: 'task-details/:id', loadChildren: './task/task-details/task-details.module#TaskDetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
