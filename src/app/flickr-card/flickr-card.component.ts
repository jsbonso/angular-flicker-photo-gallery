import { Component, OnInit, Input } from '@angular/core';
/**
 * @Author: Jon Bonso
 * A custom Flickr Card component that shows the image, author, tags
 * and links of the flickr photo search result.
 */
@Component({
  selector: 'flickr-card',
  templateUrl: './flickr-card.component.html',
styleUrls: [ './flickr-card.component.css' ],
})
export class FlickrCardComponent implements OnInit {

  @Input() link : string;
  @Input() thumbnail : string;
  @Input() author : string;
  @Input() tags : string;

  constructor() { }

  ngOnInit() {
  }

}
