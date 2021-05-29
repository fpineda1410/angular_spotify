import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("services ready");
   }

   getQuery (query:string){
     const url =  "";
     const headers = new HttpHeaders({
              'Authorization' : 'Bearer ' + 'token'
     }     
     );
     
     return this.http.get(url,{headers})

    }

}
