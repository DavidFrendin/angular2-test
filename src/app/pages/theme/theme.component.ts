import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { mockImageList } from '../../models/mockup/images';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  faBars = faBars;
  Arr = Array;
  mockImageList = mockImageList;
  rangeValue: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  imageClick(): void {
  	alert('click');
  }

  imageTap(): void {
  	alert('tap');
  }
}
