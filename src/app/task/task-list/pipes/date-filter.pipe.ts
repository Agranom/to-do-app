import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {
/*TODO: replace this fn to MomentJs*/
  private generateDate(year, month, day): Date {
    return new Date(year, month, day);
  }

  transform(items: any[], startDate: Date, endDate: Date): any {
    let itemDate: Date;

    if (!items || (!startDate && !endDate)) {
      return items;
    }
    if ((items && startDate) && !endDate) {
      return items.filter(item => {
        itemDate = new Date(item.date);
        return this.generateDate(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate()) >= startDate;
      });
    }
    if ((items && endDate) && !startDate) {
      return items.filter(item => {
        itemDate = new Date(item.date);
        return this.generateDate(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate()) <= endDate;
      });
    }

    return items.filter(item => {
      itemDate = new Date(item.date);
      return this.generateDate(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate()) >= startDate
        && this.generateDate(itemDate.getFullYear(), itemDate.getMonth(), itemDate.getDate()) <= endDate;
    });
  }

}
