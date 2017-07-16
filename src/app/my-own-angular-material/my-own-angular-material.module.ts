import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdIconModule, MdInputModule,
	MdNativeDateModule, MdProgressSpinnerModule, MdRadioModule,
	MdSidenavModule, MdSnackBarModule, MdTabsModule, MdTooltipModule
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
		MdTabsModule,
		MdSnackBarModule,
		MdDialogModule
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
		MdTabsModule,
		MdSnackBarModule,
	  	MdDialogModule
	],
})
export class MyOwnAngularMaterialModule {
}
