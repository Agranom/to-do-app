import { TestBed, inject } from '@angular/core/testing';

import { ToDoTasksService } from './to-do-tasks.service';

describe('ToDoTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoTasksService]
    });
  });

  it('should be created', inject([ToDoTasksService], (service: ToDoTasksService) => {
    expect(service).toBeTruthy();
  }));
});
