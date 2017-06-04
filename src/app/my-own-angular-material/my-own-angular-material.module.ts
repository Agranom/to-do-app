import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdSidenavModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule
  ],
  exports: [
    MdSidenavModule
  ]
})
export class MyOwnAngularMaterialModule {
}
