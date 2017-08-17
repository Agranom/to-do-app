import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListTableComponent } from './task-list-table.component';

describe('TaskListTableComponent', () => {
  let component: TaskListTableComponent;
  let fixture: ComponentFixture<TaskListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
