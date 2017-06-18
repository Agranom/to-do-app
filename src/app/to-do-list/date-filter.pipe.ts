import {Pipe, PipeTransform} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(items: any[], date: Date): any {
    if (!items || !date) {
      return items;
    }

    return items.filter(item => new Date(item.date).getDate() === date.getDate());
  }

}
