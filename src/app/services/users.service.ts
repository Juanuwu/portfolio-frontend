import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
// @ts-ignore
import { Observable } from "rxjs/Observable";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})

export class UsersService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}


  login(user: any): Observable<any> {
    let body = new URLSearchParams();
    body.set('username', user.email);
    body.set('password', user.password);
    // @ts-ignore
    return this.http.post('https://port-back-end.herokuapp.com/login', body.toString(), {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'), responseType: 'json, text', withCredentials:true});

  }

  refresh(): Observable<any> {
    if (this.cookieService.get('refresh_token') != null) {
      const token = this.cookieService.get('refresh_token').concat();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      // @ts-ignore
      return this.http.get('https://port-back-end.herokuapp.com/api/refreshToken', {headers: headers, responseType: 'json, text', withCredentials:true});
    }
    else {
      return this.http.get('https://port-back-end.herokuapp.com/api/refreshToken');
    }
  }



}
