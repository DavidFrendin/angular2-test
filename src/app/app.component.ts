import { Component } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-assessment-project';
	sidebarVisible : boolean = false;

	constructor(private sidebarService: SidebarService) { }
	
	ngOnInit() {
		this.sidebarService.visibility.subscribe(visibility => this.sidebarVisible = (visibility == 'visible' ? true : false))
	}

}
