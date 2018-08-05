import { PhotoService } from './../photo/photo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[];
  filter = '';
  debounce: Subject<string> = new Subject<string>();
  // tslint:disable-next-line:no-inferrable-types
  hasMore: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  currentPage: number = 1;
  userName: string;

  constructor(
    private activedRoute: ActivatedRoute,
    private photoService: PhotoService) { }

  ngOnInit(): void {
    this.userName = this.activedRoute.snapshot.params.userName;
    this.photos = this.activedRoute.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(350))
      .subscribe(x => this.filter = x);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService.listFromUserPaginate(this.userName, (++this.currentPage))
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        this.hasMore = (!(!photos.length));
      });
  }
}
