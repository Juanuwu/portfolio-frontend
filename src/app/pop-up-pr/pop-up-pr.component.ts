import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {CreateService} from "../services/create.service";


@Component({
  selector: 'app-pop-up-pr',
  templateUrl: './pop-up-pr.component.html',
  styleUrls: ['./pop-up-pr.component.css']

})
export class PopUpPr implements OnInit {

  nombre: string;
  descripcion: string;

  static id: string;
  static nombreIn: string;
  static descripcionIn: string;


  constructor(public dialog: MatDialog, private cookieService: CookieService, private http: HttpClient, private createSevice: CreateService) {}



  ngOnInit(): void {
    this.nombre = PopUpPr.nombreIn;
    this.descripcion = PopUpPr.descripcionIn;
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  onClick(): void {
    if(PopUpPr.id != 'no') {
      let test = JSON.stringify({id: PopUpPr.id,nombre: this.nombre, descripcion: this.descripcion});
      this.createSevice.create(test, "proyectos");
    } else {
      let test = JSON.stringify({nombre: this.nombre, descripcion: this.descripcion});
      this.createSevice.create(test, "proyectos");
    }
  }




}
