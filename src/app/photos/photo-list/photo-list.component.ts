import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[];
  filter = '';

  constructor(
    private photoService: PhotoService,
    private activedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userName = this
                      .activedRouter
                      .snapshot
                      .params
                      .userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(data => this.photos = data);
  }

}
