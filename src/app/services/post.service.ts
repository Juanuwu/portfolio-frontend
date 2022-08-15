import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private experiencia = 'http://localhost:8080/experiencia';
  private skills = "http://localhost:8080/skills";
  private educacion = 'http://localhost:8080/educacion';
  private proyectos = 'http://localhost:8080/proyectos';
  private informacion = 'http://localhost:8080/informacion';
  private usuarios = 'http://localhost:8080/api/usuarios/userList';
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
