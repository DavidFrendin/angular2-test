import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

	faBars = faBars;

	constructor(private sidebarService: SidebarService) { }

	ngOnInit(): void {
	}

	showSidebar(): void {
		this.sidebarService.changeVisibility('visible');
	}

}
