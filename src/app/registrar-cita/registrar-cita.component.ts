import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.css']
})
export class RegistrarCitaComponent {

  menuopc!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });
  }
   

}
