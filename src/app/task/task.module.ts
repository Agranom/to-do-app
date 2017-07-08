import {NgModule} from '@angular/core';

import {TaskComponent} from './task.component';
import {CommonModule} from '@angular/common';
import {MyOwnAngularMaterialModule} from '../my-own-angular-material/my-own-angular-material.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskFormComponent} from './task-form/task-form.component';
import {TaskDetailsComponent} from './task-details/task-details.component';
import {ToDoTasksService} from './services/to-do-tasks.service';
import {PriorityPipe} from './task-list/pipes/priority.pipe';
import {DateFilterPipe} from './task-list/pipes/date-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    PriorityPipe,
    DateFilterPipe
  ],
  providers: [
    ToDoTasksService
  ],
})
export class TaskModule {
}
