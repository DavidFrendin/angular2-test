import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from '../api';
import { Observable } from 'rxjs';
import { ImageModel } from '../models/image';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PicsumService {

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	public firstPage: string = "";
	public prevPage: string = "";
	public nextPage: string = "";
	public lastPage: string = "";

	constructor(
		private httpClient: HttpClient) { }

	public getImagesList(page: number, resultsPerPage: number) {
		return this.getImages(`${api.picsum.url}/list?page=${page}&limit=${resultsPerPage}`);
	}

	public getImages(url?: string) {
		if(url){
			return this.httpClient.get<ImageModel[]>(url,{ observe: 'response' }).pipe(tap(res => {
				this.retrieve_pagination_links(res);
			}));
		}

		return this.httpClient.get<ImageModel[]>(`${api.picsum.url}/list`,
			{ observe: 'response' }).pipe(tap(res => {
				this.retrieve_pagination_links(res); 
			}));
	}
	
	parse_link_header(header) {
		if (header.length == 0) {
			return ;
		}

		let parts = header.split(',');
		var links = {};
		parts.forEach( p => {
			let section = p.split(';');
			var url = section[0].replace(/<(.*)>/, '$1').trim();
			var name = section[1].replace(/rel="(.*)"/, '$1').trim();
			links[name] = url;
		}); 
		return links;
	}

	public retrieve_pagination_links(response){
		const linkHeader = this.parse_link_header(response.headers.get('Link'));
		this.firstPage = linkHeader["first"];
		this.lastPage =  linkHeader["last"];
		this.prevPage =  linkHeader["prev"];
		this.nextPage =  linkHeader["next"];
	}
}
