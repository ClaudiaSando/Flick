import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  inicio!: {navbuscar: string};


  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.inicio = {
      navbuscar: this.rutaActiva.snapshot.params['navbuscar'],
    };
    this.rutaActiva.params.subscribe(
    (params: Params) => {
    this.inicio['navbuscar'] = params['navbuscar'];
    }
    );
   
    }
   

}
