import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {CreateService} from "../services/create.service";

@Component({
  selector: 'app-pop-up-ed',
  templateUrl: './pop-up-ed.html',
  styleUrls: ['./pop-up-ed.css']

})
export class PopUpEd implements OnInit {

  nombre: string;
  lugar: string;
  inicio: string;
  final: string;
  static id: string;


  constructor(public dialog: MatDialog, private cookieService: CookieService, private http: HttpClient, private createSevice: CreateService) {
  }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  onClick(): void {
    if (PopUpEd.id != 'no') {
      let test = JSON.stringify({id: PopUpEd.id, nombre: this.nombre, lugar: this.lugar, inicio: this.inicio, end: this.final});
      this.createSevice.create(test, "educacion");
    } else {
      let test = JSON.stringify({nombre: this.nombre, lugar: this.lugar, inicio: this.inicio, end: this.final});
      this.createSevice.create(test, "educacion");
    }
  }
}


