import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalago/catalago.component';
import { AboutComponent } from './about/about.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CitasRegComponent } from './citas-reg/citas-reg.component';

import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    AboutComponent,
    BuscarComponent,
    CitasRegComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,    
    AppRoutingModule,
    CommonModule,
    MatBadgeModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MatBadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
