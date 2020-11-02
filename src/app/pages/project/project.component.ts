import { Component, OnInit } from '@angular/core';
import { faClock, faPalette, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faAngular, faGit } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

	faClock = faClock;
	faHtml5 = faHtml5;
	faAngular = faAngular;
	faGit = faGit;
	faPalette = faPalette;
	faTerminal = faTerminal;

	constructor() { }

	ngOnInit(): void {
	}

}
