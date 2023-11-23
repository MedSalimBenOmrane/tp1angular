import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let count=0
    for (let i = 0; i < value.length; i++) {
      if (value[i] === " ") {
        count++;
      }
    }

    if(!value || count==value.length){
      return 'cv.jpg';
    }
    return value;
  }

}
