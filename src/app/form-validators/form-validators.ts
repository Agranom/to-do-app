import {AbstractControl, ValidatorFn} from '@angular/forms';
import {getDateWithoutTime} from '../shared/common-functions';

export function expiredDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const date = control.value;
    const currentDate = getDateWithoutTime(new Date);
    return (date < currentDate) ? {'expiredDate': {date}} : null;
  };
};
