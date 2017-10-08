import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule,
	MatInputModule,
	MatNativeDateModule,
	MatRadioModule,
	MatSidenavModule, MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from "@angular/material";


@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule,
		MatCheckboxModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		MatTooltipModule,
		MatTabsModule,
		MatSnackBarModule,
		MatDialogModule,
		MatToolbarModule,
		MatButtonToggleModule
	],
	exports: [
		MatSidenavModule,
		MatCheckboxModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		MatTooltipModule,
		MatTabsModule,
		MatSnackBarModule,
		MatDialogModule,
		MatToolbarModule,
		MatButtonToggleModule
	],
})
export class MyOwnAngularMaterialModule {
}
