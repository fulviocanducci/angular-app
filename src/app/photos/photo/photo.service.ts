import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Photo } from './photo';
import { Observable } from 'rxjs';

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

  listFromUserPaginate(name: string, page: number): Observable<Photo[]> {
    const params = new HttpParams()
        .append('page', page.toString());

    return this
      .http
      .get<Photo[]>(`http://localhost:3000/${name}/photos`, {params: params});
  }

}
