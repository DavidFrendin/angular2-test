import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../../models/image';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

	faCamera = faCamera;

  @Input() image: ImageModel;

  constructor() { }

  ngOnInit(): void {
  }

}
