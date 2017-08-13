import {NgModule} from '@angular/core';

import {ConfirmDialogComponent} from './confirm-dialog.component';
import {MdButtonModule, MdDialogModule} from '@angular/material';

@NgModule({
	imports: [MdButtonModule, MdDialogModule],
	exports: [ConfirmDialogComponent],
	declarations: [ConfirmDialogComponent],
	providers: [],
	entryComponents: [ConfirmDialogComponent]
})
export class ConfirmDialogModule {
}
