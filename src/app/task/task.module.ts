import {NgModule} from '@angular/core';

import {TaskComponent} from './task.component';
import {CommonModule} from '@angular/common';
import {MyOwnAngularMaterialModule} from '../my-own-angular-material/my-own-angular-material.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskFormComponent} from './task-form/task-form.component';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {ToDoTasksService} from './services/to-do-tasks.service';
import {DateFilterPipe} from './task-list/pipes/date-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskListTableComponent } from './task-list/task-list-table/task-list-table.component';
import { CategoryFilterPipe } from './task-list/pipes/category-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MyOwnAngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    DateFilterPipe,
    TaskListTableComponent,
    CategoryFilterPipe
  ],
  providers: [
    ToDoTasksService
  ],
})
export class TaskModule {
}
