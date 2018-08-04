import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Photo } from './photo';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) { }

  listFromUser(name: string): Observable<Photo[]> {
    return this
      .http
      .get<Photo[]>(`http://localhost:3000/${name}/photos`);
  }
}
