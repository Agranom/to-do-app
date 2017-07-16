import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnAngularMaterialModule} from './my-own-angular-material/my-own-angular-material.module';
import 'hammerjs';
import {Config} from './config';
import {FormValidatorService} from './services/form-validator.service';
import {TaskModule} from './task/task.module';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCJAPAARygnIBL-4DA7k6R8DROQzDKsujg',
  authDomain: 'to-do-app-1c304.firebaseapp.com',
  databaseURL: 'https://to-do-app-1c304.firebaseio.com',
  projectId: 'to-do-app-1c304',
  storageBucket: 'to-do-app-1c304.appspot.com',
  messagingSenderId: '252005753893'
};


@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MyOwnAngularMaterialModule,
    TaskModule
  ],
  providers: [Config, FormValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
