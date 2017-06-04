import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class HttpService {

  constructor(private afDatabase: AngularFireDatabase) {
  }

  getItems(uri: string) {
    return this.afDatabase.list(uri);
  }

}
