import { PhotoService } from '../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activedRoute.snapshot.params.userName;
    this.photos = this.activedRoute.snapshot.data.photos;
  }

  load() {
    this.photoService.listFromUserPaginate(this.userName, (++this.currentPage))
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        this.hasMore = (!(!photos.length));
      });
  }
}
