import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  baseUrl:string='api/';

  constructor(private http:HttpClient) {

   }

   getHeros(){
     return this.http.get(this.baseUrl+'heroes')
   }
}
