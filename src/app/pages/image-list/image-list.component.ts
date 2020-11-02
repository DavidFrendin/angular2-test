import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../../components/image/image.component';
import { PicsumService } from '../../services/picsum.service';
import { ImageModel } from '../../models/image';
import { Observable, Subject } from 'rxjs';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
	images$: ImageModel[];
	faAngleDoubleRight = faAngleDoubleRight;
	faAngleDoubleLeft = faAngleDoubleLeft;
	page: number = 1;
	loading: boolean = false;
	resultsPerPage: number = 24;
	resultsPerPageChanged = new Subject<number>();


  constructor(public picsumService: PicsumService) { 
    this.resultsPerPageChanged
      .pipe(
        debounceTime(300))
      .subscribe(() => {
	  console.log('value changed');
		this.page = 1;
        this.getImages();
      })
  }

	ngOnInit(): void {
		this.getImages();
	}

	nextPage(): void {
		if (this.picsumService.nextPage && !this.loading) {
			this.page++;
			this.getImagesByUrl(this.picsumService.nextPage);
		}
	}

	previousPage(): void {
		if (this.page > 1 && this.picsumService.prevPage && !this.loading) {
			this.page--;
			this.getImagesByUrl(this.picsumService.prevPage);
		}
	}

  	getImagesByUrl(url? : string): void {
	  	this.loading = true;
		this.picsumService.getImages(url).subscribe((res)=>{
				this.images$ = res.body;
				this.loading = false;
		});
  	}

	getImages(): void {
	  	this.loading = true;
		this.picsumService.getImagesList(this.page, this.resultsPerPage).subscribe((res)=>{
				this.images$ = res.body;
				this.loading = false;
		});
	}

	imageClick(image : ImageModel): void {
		window.open(image.url, '_blank');
	}

	resultsPerPageModelChanged($event) {
		this.resultsPerPageChanged.next();
	}

}
