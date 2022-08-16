import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private experiencia = 'https://port-back-end.herokuapp.com/experiencia';
  private skills = "https://port-back-end.herokuapp.com/skills";
  private educacion = 'https://port-back-end.herokuapp.com/educacion';
  private proyectos = 'https://port-back-end.herokuapp.com/proyectos';
  private informacion = 'https://port-back-end.herokuapp.com/informacion';
  private usuarios = 'https://port-back-end.herokuapp.com/api/usuarios/userList';
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getExp(){
    return this.httpClient.get(this.experiencia);
  }

  getSkills(){
    return this.httpClient.get(this.skills)
  }

  getEducacion() {
    return this.httpClient.get(this.educacion);
  }

  getProyectos() {
    return this.httpClient.get(this.proyectos);
  }

  getInformacion() {
    return this.httpClient.get(this.informacion);
  }

  getUsuarios() {

    if (this.cookieService.get('access_token') != null) {
      const token = this.cookieService.get('access_token').concat();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      // @ts-ignore
      return this.httpClient.get(this.usuarios, {headers: headers, responseType: 'json, text', withCredentials:true});

    }
else {
      return this.httpClient.get(this.usuarios);
    }

  }

}
