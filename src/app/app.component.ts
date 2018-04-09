import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FlickrService } from './services/flickr.service';
import {Jsonp} from '@angular/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

 constructor(private flickrService: FlickrService) {}
  results: Array<object>;
  static defaultSearch = 'dogs';

  /**
  * On initialize, call the flickService with a default search
  */
  ngOnInit(): void {
    this.search(AppComponent.defaultSearch);
  }

  /**
  * The subscriber method to call the flickService 
  */
  search(tags?: string): void {
    this.flickrService
      .searchPhotos(tags)
      .subscribe((res: any) => { 
        this.results = res._body.items;
        });
  }
}