import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css'],
})
export class AltaClienteComponent implements OnInit {
  cliente!: Cliente;
  registro = false;
  grupos!: Grupo[];

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.registro = false;
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    console.log(this.cliente);
    this.registro = true;
    this.cliente = this.clientesService.nuevoCliente();
  }
}
