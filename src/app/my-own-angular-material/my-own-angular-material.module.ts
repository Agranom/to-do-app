import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdIconModule, MdInputModule,
  MdNativeDateModule, MdProgressSpinnerModule, MdRadioModule,
  MdSidenavModule, MdTabsModule, MdTooltipModule
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
    MdTooltipModule,
    MdTabsModule
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
    MdTooltipModule,
    MdTabsModule
  ],
})
export class MyOwnAngularMaterialModule {
}
