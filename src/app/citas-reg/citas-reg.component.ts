import { Component, OnInit } from '@angular/core';

import { ClientesService, Cliente } from '../clientes.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
=======
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-citas-reg',
  templateUrl: './citas-reg.component.html',
  styleUrls: ['./citas-reg.component.css']
})
export class CitasRegComponent implements OnInit{
  clientes!: Cliente[] | undefined;
  menuopc!: string | null;
  clieDes: any = localStorage.getItem("clieDes") || [];
  constructor(private route: ActivatedRoute, private clientesService: ClientesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });

    this.clientes = this.clientesService.getClientes();
    if(this.clieDes.length > 0){
      this.clieDes = JSON.parse(this.clieDes);
    }
  }

  
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
