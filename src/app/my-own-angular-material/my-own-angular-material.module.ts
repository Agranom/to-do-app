import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdIconModule, MdInputModule,
	MdNativeDateModule, MdProgressSpinnerModule, MdRadioModule,
	MdSidenavModule, MdSnackBarModule, MdTableModule, MdTabsModule, MdTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk';

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
		MdDialogModule,
		MdTableModule,
		CdkTableModule
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
	  	MdDialogModule,
		MdTableModule,
		CdkTableModule
	],
})
export class MyOwnAngularMaterialModule {
}
