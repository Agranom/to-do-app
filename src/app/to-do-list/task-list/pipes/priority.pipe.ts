import {Pipe, PipeTransform} from '@angular/core';
import {Priority} from '../../priority.enum';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return;
    }

    return Priority[value];
  }

}
