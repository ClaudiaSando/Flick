import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AboutComponent } from './about/about.component';
import { CitasRegComponent } from './citas-reg/citas-reg.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent},
  { path: 'inicio/:navcatalogo', component: CatalogoComponent },
  { path: 'inicio/:navbuscar', component: BuscarComponent },
  { path: 'inicio/:navabout', component: AboutComponent },
  { path: 'inicio/:navregcitas', component: CitasRegComponent },
  { path: 'inicio/:navlogin', component: LoginComponent },
  { path: "", redirectTo: "/inicio", pathMatch: "full"},// Cuando es la raíz
  { path: "**", redirectTo: "/inicio"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
