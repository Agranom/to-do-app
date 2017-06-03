/**
 * Created by владимир on 03.06.2017.
 */
export interface Task {
  title: string;
  description?: string;
  priority: Priority;
  date: Date;
}

const enum Priority {
  HIGH,
  NORMAL,
  LOW
}
