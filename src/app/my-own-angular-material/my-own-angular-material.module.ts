import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MdButtonModule, MdButtonToggleModule, MdCheckboxModule, MdDatepickerModule, MdDialogModule, MdIconModule,
	MdInputModule,
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
		MdToolbarModule,
		MdButtonToggleModule
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
		MdToolbarModule,
		MdButtonToggleModule
	],
})
export class MyOwnAngularMaterialModule {
}
