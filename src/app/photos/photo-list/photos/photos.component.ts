import { Photo } from '../../photo/photo';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnChanges {


  @Input() photos: Photo[] = [];
  rows: any[] = [];
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos){
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Photo[]): any[] {
      const n: any[] = [];
      if (photos) {
        for (let i = 0; i < photos.length; i = i + 3) {
          n.push(photos.slice(i, i + 3));
        }
      }
      return n;
  }


}
