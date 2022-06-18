import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('openForm') uwu: ElementRef;

  constructor(private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    console.log("uwu");
  }

  change(): void {

    this.renderer2.setStyle(this.uwu.nativeElement, 'color', 'black');

  }


}







