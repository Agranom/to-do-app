import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdIconModule, MdInputModule,
  MdNativeDateModule, MdRadioModule,
  MdSidenavModule
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
    MdRadioModule
  ],
  exports: [
    MdSidenavModule,
    MdCheckboxModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule
  ],
})
export class MyOwnAngularMaterialModule {
}
