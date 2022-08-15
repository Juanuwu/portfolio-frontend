import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { PopUpExp } from './pop-up-exp/pop-up-exp.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import { PopUpEd } from './pop-up-ed/pop-up-ed.component';
import { PopUpSk } from './pop-up-sk/pop-up-sk.component';
import { PopUpPr } from './pop-up-pr/pop-up-pr.component';
import { PopUpAbout } from './pop-up-about/pop-up-about.component';

@NgModule({
  declarations: [
    AppComponent,
    PopUpExp,
    PopUpEd,
    PopUpSk,
    PopUpPr,
    PopUpAbout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [{provide:  APP_BASE_HREF, useValue: '/'}, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
