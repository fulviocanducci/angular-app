import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  @Input() url;
  @Input() alt;
  @Input() width;
  @Input() height;

  constructor() {

  }
}
