import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
  name: 'filterByDescription'
})
export class PhotoFilterByDescriptionPipe implements PipeTransform {
  transform(photos: Photo[], value: string) {
    if (value) {
      value = value.toLowerCase();
      return photos.filter(
        p => p.description.toLowerCase().includes(value)
      );
    } else {
      return photos;
    }
  }
}
