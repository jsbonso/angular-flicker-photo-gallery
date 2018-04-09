import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlickrCardComponent } from './flickr-card/flickr-card.component';

import {HttpClientModule} from '@angular/common/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';

import { FlickrService } from './services/flickr.service';
import { NgxPaginationModule } from 'ngx-pagination';

// Pipes
import { AuthorPipe } from './pipes/author.pipe';
import { TagsPipe } from './pipes/tags.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, JsonpModule, NgxPaginationModule ],
  declarations: [ AppComponent, FlickrCardComponent, AuthorPipe, TagsPipe],
  bootstrap:    [ AppComponent ],
  providers:    [ FlickrService ]
})
export class AppModule { }
