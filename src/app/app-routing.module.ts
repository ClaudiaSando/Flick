import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AboutComponent } from './about/about.component';
import { CitasRegComponent } from './citas-reg/citas-reg.component';
import { RegistrarCitaComponent } from './registrar-cita/registrar-cita.component';

const routes: Routes = [
  { path: "", redirectTo: "inicio", pathMatch: "full"},// Cuando es la raíz
  { path: 'inicio', component: MainComponent},
  { path: 'inicio/catalogo', component: CatalogoComponent },
  { path: 'inicio/buscar', component: BuscarComponent },
  { path: 'inicio/about', component: AboutComponent },
  { path: 'inicio/registrar-cita', component: RegistrarCitaComponent },
  { path: 'inicio/citas-registradas', component: CitasRegComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
