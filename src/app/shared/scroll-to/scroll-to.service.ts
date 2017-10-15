import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class ScrollToService {

	constructor(@Inject(DOCUMENT) private document: Document) {
	}

	scrollTo(scrollTarget: string) {
		const target = this.document.querySelector(scrollTarget);
		setTimeout(() => target.scrollIntoView({block: 'start', behavior: 'smooth'}), 100);
	}

}
