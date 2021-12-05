import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieText'
})
export class MovieTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
