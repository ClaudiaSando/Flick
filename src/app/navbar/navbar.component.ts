import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navcatalogo = 'catalogo';
  navbuscar = 'buscar';
  navabout = 'about';
  navregcitas = 'citas-registradas';
  navlogin='login'
}
