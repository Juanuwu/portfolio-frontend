import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class CreateService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  create(datos: string, objetivo: string) {
      const token = this.cookieService.get('access_token').concat();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      });
      return this.http.post('http://localhost:8080/'+objetivo, datos , {
        headers: headers,
        withCredentials: true
      }).subscribe((data: any) => {
        location.reload()
      });
    }
  }



