import {Priority} from '../shared/priority.enum';

export interface Task {
  title: string;
  description?: string;
  priority: Priority;
  date: Date;
  isCompleted: boolean;
}
