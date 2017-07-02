import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdIconModule, MdInputModule,
  MdNativeDateModule, MdProgressSpinnerModule, MdRadioModule,
  MdSidenavModule, MdTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdProgressSpinnerModule,
    MdTooltipModule
  ],
  exports: [
    MdSidenavModule,
    MdCheckboxModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdProgressSpinnerModule,
    MdTooltipModule
  ],
})
export class MyOwnAngularMaterialModule {
}
