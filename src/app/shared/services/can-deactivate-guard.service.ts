import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CanDeactivate} from '@angular/router';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
	canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> | Promise<boolean> {
		return component.canDeactivate ? component.canDeactivate() : true;
	}
}
