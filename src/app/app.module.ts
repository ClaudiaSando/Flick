import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AboutComponent } from './about/about.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CitasRegComponent } from './citas-reg/citas-reg.component';

import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

/////Registro de citas/////
import { ClientesService } from './clientes.service';
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';

/////Video/////
import { DomseguroPipe } from './domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    AboutComponent,
    BuscarComponent,
    CitasRegComponent,
    AltaClienteComponent,
    ListadoClientesComponent,
    RegistrarCitaComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    GoogleMapsModule,   
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  exports: [
    CommonModule, /*Registro Citas*/AltaClienteComponent, ListadoClientesComponent/*Registro Citas*/
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

