import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateService} from "../services/create.service";


@Component({
  selector: 'app-pop-up-about',
  templateUrl: './pop-up-about.component.html',
  styleUrls: ['./pop-up-about.component.css']

})
export class PopUpAbout implements OnInit {
  nombre: string;
  tagline: string;
  ubicacion: string;
  about: string;

  static id: string;
  static nombreIn: string;
  static taglineIn: string;
  static ubicacionIn: string;
  static aboutIn: string;


  constructor(public dialog: MatDialog, private createSevice: CreateService) {}


  ngOnInit(): void {
    this.nombre = PopUpAbout.nombreIn;
    this.tagline = PopUpAbout.taglineIn;
    this.ubicacion = PopUpAbout.ubicacionIn;
    this.about = PopUpAbout.aboutIn;
  }

  onNoClick(): void {
    this.dialog.closeAll();
  }

  onClick(): void {

      let valores = JSON.stringify({id: PopUpAbout.id, nombre: this.nombre , tagline: this.tagline, ubicacion: this.ubicacion, about: this.about});
      this.createSevice.create(valores, "informacion");

  }

}

