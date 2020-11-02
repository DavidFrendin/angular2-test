import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

	private messageSource = new BehaviorSubject('default message');
	visibility = this.messageSource.asObservable();

	constructor() { }

	changeVisibility(visibility: string) {
		this.messageSource.next(visibility)
	}
}
