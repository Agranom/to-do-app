import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

	startDate: Date;
	endDate: Date;


  constructor() {
  }

  ngOnInit() {
  }

}
