import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {AppRoutingModule} from './routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {HttpService} from "./services/http.service";
import { PriorityPipe } from './to-do-list/priority.pipe';

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
    ToDoListComponent,
    PriorityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
