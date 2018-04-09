import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

constructor(private sanitizer: DomSanitizer){

}
  // Transform the Author title 
  transform(value: any, args?: any): any {
    // TODO: Replace with a better regex:
    value = value.replace('nobody@flickr.com (\"','');
    value = value.replace('\")','');
    return value;

    // Uncomment this if you want to sanitize the Author title
    // as it may contain 
    // return this.sanitizer.sanitize(SecurityContext.STYLE, value);
  }

}
