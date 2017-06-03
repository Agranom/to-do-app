/**
 * Created by владимир on 03.06.2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ToDoListComponent} from './to-do-list/to-do-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/to-do-list', pathMatch: 'full'},
  {path: 'to-do-list', component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
