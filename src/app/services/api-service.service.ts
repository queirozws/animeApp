import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url: string = 'https://api.jikan.moe/v4/top/anime';

  constructor( private http: HttpClient ) { }

  get(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}

interface AnimeData {
  data: any;
}

interface AnimeRecomendations {
  data: [
    {
      mal_id: string,
      entry: [ {} ];
      content: string;
      user: {
        data: {
          url: string;
          username: string;
        }
      };
    }
  ],
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  }

}

