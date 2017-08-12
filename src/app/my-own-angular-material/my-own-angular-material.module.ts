import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdIconModule, MdInputModule,
	MdNativeDateModule, MdProgressSpinnerModule, MdRadioModule,
	MdSidenavModule, MdSnackBarModule, MdTabsModule, MdToolbarModule, MdTooltipModule
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
		MdDialogModule,
		MdToolbarModule
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
		MdToolbarModule
	],
})
export class MyOwnAngularMaterialModule {
}
