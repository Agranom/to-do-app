import {Injectable} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Injectable()
export class FormValidatorService {

  constructor() {
  }

  /***
   * Get error messages for form fields
   * @param control - Form control
   * @param name - Name of form control
   * @return {string} - Returns error message for certain form field
   */
  getValidatorMessage(control: AbstractControl, name: string): string {
    if (control.hasError('required')) {
      return this.getRequired(name);
    }
    if (control.hasError('minlength')) {
      const requiredLength = control.errors.minlength.requiredLength;
      return this.getMinLength(name, requiredLength);
    }
    if (control.hasError('maxlength')) {
      const requiredLength = control.errors.maxlength.requiredLength;
      return this.getMaxLength(name, requiredLength);
    }
    if (control.hasError('expiredDate')) {
      return this.getexpiredDate();
    }
  }

  /**
   * Get error message for required validator
   * @param name - Name of form control
   * @return {string} - Error message
   */
  private getRequired(name: string): string {
    return `${name} is required`;
  }

  /**
   * Get error message for minLength validator
   * @param name - Name of form control
   * @param length - Required min length
   * @return {string} - Error message
   */
  private getMinLength(name: string, length: number): string {
    return `${name} must be at least ${length} characters`;
  }

  /**
   * Get error message for maxLength validator
   * @param name - Name of form control
   * @param length - Required max length
   * @return {string} - Error message
   */
  private getMaxLength(name: string, length: number): string {
    return `${name} must be less than ${length} characters`;
  }

  /**
   * Get error message for expiredDate validator
   * @return {string} - Error message
   */
  private getexpiredDate() {
    return 'Incorrect date';
  }

}
