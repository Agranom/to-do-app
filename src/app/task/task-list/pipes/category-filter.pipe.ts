import {Pipe, PipeTransform} from '@angular/core';
import {getDateWithoutTime} from '../../../shared/common-functions';

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
        /*TODO: delete this transpire*/
        const itemDate = getDateWithoutTime(new Date(item.date));
        const currentDate = getDateWithoutTime(new Date());
        return itemDate < currentDate;
      });
    }
    if (category === 'today') {
      return items.filter(item => {
        return getDateWithoutTime(new Date(item.date)) === getDateWithoutTime(new Date());
      });
    }
  }

}
