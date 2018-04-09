import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {

  // Transform the Tags, removes 'undefined' tags 
  transform(value: any, args?: any): any {
    // TODO: Replace with a better regex:
    value = value.replace('undefined','');
    value = value.replace(/\s/g,', ');
    //value = value.substring(0, value.length - 1);
    return value;
  }

}
