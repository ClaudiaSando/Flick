import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { PelisService } from '../pelis.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalago.component.html',
  styleUrls: ['./catalago.component.css']
})
export class CatalogoComponent implements OnInit {
//  aqui modifique el array, asi que copia y pega todo eso
  menuopc!: string | null;
  pelis: any;

  constructor(private pelisServicio: PelisService, private route:ActivatedRoute){}

  movies: any = []

  async ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });

    this.pelis=await this.pelisServicio.getAll();
  }
   
}