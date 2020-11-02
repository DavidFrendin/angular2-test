import { Component, OnInit } from '@angular/core';
import { faAngular, faHtml5, faSass, faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	faAngular = faAngular;
	faHtml5 = faHtml5;
	faSass = faSass;
	faGithub = faGithub;
	faFontAwesome = faFontAwesome;
	faTimes = faTimes;
	username = this.generateUsername();

	constructor(private sidebarService: SidebarService) { }

	ngOnInit(): void {
  	}

	closeSidebar(): void {
		this.sidebarService.changeVisibility('hide');
	}

	getRandomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	generateUsername(): string {
		const name1: string[] = ['Yoda', 'Mace', 'Count', 'Qui-Gon', 'Obi-Wan', 'Anakin', 'Ahsoka', 'Cal', 'Cere', 'Kanan', 'Ezra', 'Luke', 'Ben', 'Han', 'Rey', 'Leia', 'Chewbacca', 'Wedge', 'Biggs', 'General'];
		const name2: string[] = ['Windu', 'Dooku', 'Jinn', 'Kenobi', 'Skywalker', 'Tano', 'Kestis', 'Junda', 'Jarrus', 'Bridger', 'Solo', 'Organa', 'Darklighter'];
		let result = name1[this.getRandomInt(0, name1.length + 1)] + ' ' + name2[this.getRandomInt(0, name2.length + 1)];
		return result;
	}

	

}
