import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
/*TODO: write doc for this pipe*/
  transform(items: any, category: string): any {
    if (!items || !category) {
      return items;
    }
    if (category === 'overdue') {
      return items.filter(item => {
        return moment(item.date).isBefore(moment(), 'day');
      });
    }
    if (category === 'today') {
      return items.filter(item => {
        return moment(item.date).isSame(moment(), 'day');
      });
    }
  }

}
