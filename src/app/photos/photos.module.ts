import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { PhotoFilterByDescriptionPipe } from './photo-list/photo-filter-by-description.pipe';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    PhotoFilterByDescriptionPipe
  ],
  exports: [

  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class PhotosModule { }
