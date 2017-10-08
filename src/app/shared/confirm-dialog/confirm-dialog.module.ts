import
{NgModule} from '@angular/core';

import {ConfirmDialogComponent} from './confirm-dialog.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
	imports: [MatButtonModule, MatDialogModule],
	exports: [ConfirmDialogComponent],
	declarations: [ConfirmDialogComponent],
	providers: [],
	entryComponents: [ConfirmDialogComponent]
})
export class ConfirmDialogModule {
}
