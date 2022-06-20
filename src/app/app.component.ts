import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {PopUpComponent} from "./pop-up/pop-up.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('loginForm') uwu: ElementRef;

  title: 'frontend';

  constructor(private renderer2: Renderer2, private elem: ElementRef, private dialogRef: MatDialog) {}

  ngOnInit(): void {

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

  }

  edit_text(id: string): void {
    this.renderer2.setProperty(document.getElementById(id), 'contentEditable', true);
  }

  openDialog(): void {
    this.dialogRef.open(PopUpComponent);
  }



}







