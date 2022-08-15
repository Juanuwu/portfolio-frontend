import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {CreateService} from "../services/create.service";

@Component({
  selector: 'app-pop-up-sk',
  templateUrl: './pop-up-sk.html',
  styleUrls: ['./pop-up-sk.css']

})
export class PopUpSk implements OnInit {

  nombre: string;
  numero: string;
  static id: string;


  constructor(private cookieService: CookieService, private http: HttpClient, public dialog: MatDialog, private createSevice: CreateService) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  onClick(): void {
    if (PopUpSk.id != 'no') {
      let test = JSON.stringify({id: PopUpSk.id, skill: this.nombre , numero: parseInt(this.numero)});
      this.createSevice.create(test, "skills");
    } else {
      let test = JSON.stringify({skill: this.nombre, numero: parseInt(this.numero)});
      this.createSevice.create(test, "skills");
    }

  }

}
