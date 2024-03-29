import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {PopUpExp} from "./pop-up-exp/pop-up-exp.component";
import {PostService} from "./services/post.service";
import {UsersService} from "./services/users.service";
import {PopUpEd} from "./pop-up-ed/pop-up-ed.component";
import {PopUpSk} from "./pop-up-sk/pop-up-sk.component";
import {PopUpPr} from "./pop-up-pr/pop-up-pr.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {PopUpAbout} from "./pop-up-about/pop-up-about.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  experiencia:any;
  skills:any;
  educacion:any;
  proyectos:any;
  informacion:any;
  email:any;
  password:any;
  isLoggedIn: boolean

  @ViewChild('loginForm') uwu: ElementRef;

  title: 'frontend';


  constructor(public userService: UsersService, private httpClient: HttpClient, private cookieService: CookieService, private service:PostService, private renderer2: Renderer2, private elem: ElementRef, private dialogRef: MatDialog){}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( (data: any) => {
      location.reload();
    });
  }

  ngOnInit(): void {

    this.service.getUsuarios()
      .subscribe({
        next: (value: any) => {this.isLoggedIn = true;},
        error: (error: any) => {
          this.userService.refresh().subscribe( (data: any) => {
            this.isLoggedIn = true;
            location.reload();
          });
        }
      });

    this.service.getExp()

      .subscribe(response => {

        this.experiencia = response;

      });
    this.service.getSkills()

      .subscribe(response => {

        this.skills = response;

      });

    this.service.getEducacion()
      .subscribe(response => {

        this.educacion = response;

      });

    this.service.getProyectos()
      .subscribe(response => {

        this.proyectos = response;

      });

    this.service.getInformacion()
      .subscribe(response => {

        this.informacion = response;

      });

  }

  openForm(): void {
    this.renderer2.setStyle(this.uwu.nativeElement, 'display', 'block');
  }

  closeForm(): void {
    this.renderer2.setStyle(this.uwu.nativeElement, 'display', 'none');
  }

  showEdit(): void {
    let elements = this.elem.nativeElement.querySelectorAll('.edit');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = 'block';
    }
    let add = this.elem.nativeElement.querySelectorAll('.add');
    for (let i = 0; i < add.length; i++) {
      add[i].style.display = 'block';
    }
    let delElem = this.elem.nativeElement.querySelectorAll('.delete');
    for (let i = 0; i < delElem.length; i++) {
      delElem[i].style.display = 'block';
    }
  }

  openDialogExp(id: string, nombre: string, lugar: string, inicio:string, final: string, jornada: string, ubicacion:string): void {
    this.dialogRef.open(PopUpExp);
    PopUpExp.id = id;
    PopUpExp.nombreIn = nombre;
    PopUpExp.lugarIn = lugar;
    PopUpExp.inicioIn = inicio;
    PopUpExp.finalIn = final;
    PopUpExp.jornadaIn = jornada;
    PopUpExp.ubicacionIn = ubicacion;
  }

  openDialogEd(id: string, nombre: string, lugar: string, inicio: string, final:string): void {
    this.dialogRef.open(PopUpEd);
    PopUpEd.id = id;
    PopUpEd.nombreIn = nombre;
    PopUpEd.lugarIn = lugar;
    PopUpEd.inicioIn = inicio;
    PopUpEd.finalIn = final;
  }

  openDialogSk(id: string, nombre: string, numero:string): void {
    this.dialogRef.open(PopUpSk);
    PopUpSk.id = id;
    PopUpSk.nombreIn = nombre;
    PopUpSk.numeroIn = numero;
  }

  openDialogPr(id: string, nombre: string, descripcion: string) {
    this.dialogRef.open(PopUpPr);
    PopUpPr.id = id;
    PopUpPr.nombreIn = nombre;
    PopUpPr.descripcionIn = descripcion;
  }

  openDialogAbout(id: string, nombre: string, tagline:string, ubucacion:string, about:string) {
    this.dialogRef.open(PopUpAbout);
    PopUpAbout.id = id;
    PopUpAbout.nombreIn = nombre;
    PopUpAbout.taglineIn = tagline;
    PopUpAbout.ubicacionIn = ubucacion;
    PopUpAbout.aboutIn = about;
  }

  deleteSkill(id: string): void {
    if (this.cookieService.get('access_token') != null) {
      const token = this.cookieService.get('access_token').concat();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      // @ts-ignore
      this.httpClient.delete('https://port-back-end.herokuapp.com/skills/skill/'+id.toString(), {headers: headers, responseType: 'json, text', withCredentials:true}).subscribe( (data: any) => {
        location.reload();
      });
    }
  }

  deleteExp(id: string): void {
    if (this.cookieService.get('access_token') != null) {
      const token = this.cookieService.get('access_token').concat();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      // @ts-ignore
      this.httpClient.delete('https://port-back-end.herokuapp.com/experiencia/experiencia/'+id.toString(), {headers: headers, responseType: 'json, text', withCredentials:true}).subscribe( (data: any) => {
        location.reload();
      });
    }
  }

  deletePr(id: string): void {
    if (this.cookieService.get('access_token') != null) {
      const token = this.cookieService.get('access_token').concat();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      // @ts-ignore
      this.httpClient.delete('https://port-back-end.herokuapp.com/proyectos/proyecto/'+id.toString(), {headers: headers, responseType: 'json, text', withCredentials:true}).subscribe( (data: any) => {
        location.reload();
      });
    }
  }

  deleteEd(id: string): void {
    if (this.cookieService.get('access_token') != null) {
      const token = this.cookieService.get('access_token').concat();
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      });
      // @ts-ignore
      this.httpClient.delete('https://port-back-end.herokuapp.com/educacion/educacion/'+id.toString(), {headers: headers, responseType: 'json, text', withCredentials:true}).subscribe( (data: any) => {
        location.reload();
      });
    }
  }

  logout() {
    //this.cookieService.delete('access_token');
    //this.cookieService.delete('refresh_token');
    this.httpClient.get("https://port-back-end.herokuapp.com/logout", {withCredentials:true}).subscribe( (data: any) => {
      this.isLoggedIn = false;
      location.reload();
    }, error => {this.isLoggedIn = false;
      location.reload();});
  }
}







