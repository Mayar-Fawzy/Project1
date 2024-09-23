import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient) { }
  getServies() :Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2dc4f3b7280c70e5009487448e8c74f4`);
  }
}
