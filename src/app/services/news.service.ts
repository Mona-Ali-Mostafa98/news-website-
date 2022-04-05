
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient:HttpClient) { }
  
  getEgyptNews():Observable<any>{
    return this._httpClient.get(`${environment.api_url_eg}`);
   }
   getUsaNews():Observable<any>{
    return this._httpClient.get(`${environment.api_url_us}`);
   }

}