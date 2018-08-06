import { PhotoModule } from '../photo/photo.module';
import { PhotoFilterByDescriptionPipe } from './photo-filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';


@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    PhotoFilterByDescriptionPipe,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    RouterModule
  ]
})
export class PhotoListModule { }
