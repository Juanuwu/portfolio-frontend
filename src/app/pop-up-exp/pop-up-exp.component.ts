import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {CreateService} from "../services/create.service";


@Component({
  selector: 'app-pop-up-exp',
  templateUrl: './pop-up-exp.html',
  styleUrls: ['./pop-up-exp.css']

})
export class PopUpExp implements OnInit {

  nombre: string;
  lugar: string;
  inicio: string;
  final: string;
  jornada: string;
  ubicacion: string;
  static id: string;


  constructor(public dialog: MatDialog, private cookieService: CookieService, private http: HttpClient, private createSevice: CreateService) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  onClick(): void {
    if (PopUpExp.id != 'no') {
      let test = JSON.stringify({
        id: PopUpExp.id,
        nombre: this.nombre,
        lugar: this.lugar,
        inicio: this.inicio,
        end: this.final,
        jornada: this.jornada,
        ubicacion: this.ubicacion
      });
      this.createSevice.create(test, "experiencia");
    } else {
      let test = JSON.stringify({
        nombre: this.nombre,
        lugar: this.lugar,
        inicio: this.inicio,
        end: this.final,
        jornada: this.jornada,
        ubicacion: this.ubicacion
      });
      this.createSevice.create(test, "experiencia");
    }
  }
}

