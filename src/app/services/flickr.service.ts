import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Request, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FlickrService {
  
  static FLICKR_BASE_URL: string = 'https://api.flickr.com/services/feeds/photos_public.gne';
  
  header: Headers;
  opts: RequestOptions;
  
  constructor(private _jsonp: Jsonp) {

    this.header = new Headers();
    this.header.append('Content-Type', 'application/json');
    this.opts = new RequestOptions();
    this.opts.headers = this.header;
  }
  
  query(params?: Array<string>): Observable<any> {
    let queryURL: string = `${FlickrService.FLICKR_BASE_URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this._jsonp.request(queryURL, this.opts);
  }
  
  searchPhotos(tags: string): Observable<any[]> {
    return this.query([
      `tags=${tags}`,
      `tagmode=any`,
      `format=json`,
      `jsoncallback=JSONP_CALLBACK`
    ]);
  }

}