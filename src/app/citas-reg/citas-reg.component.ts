import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-citas-reg',
  templateUrl: './citas-reg.component.html',
  styleUrls: ['./citas-reg.component.css']
})
export class CitasRegComponent {

  inicio!: {navregcitas: string};


  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.inicio = {
      navregcitas: this.rutaActiva.snapshot.params['navregcitas'],
    };
    this.rutaActiva.params.subscribe(
    (params: Params) => {
    this.inicio['navregcitas'] = params['navregcitas'];
    }
    );
   
    }

}
