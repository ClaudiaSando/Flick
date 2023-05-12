import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
import { GRUPOS } from './grupo';

@Injectable()
export class ClientesService {
  private clientes: Cliente[];
  private grupos: Grupo[] = GRUPOS;

  constructor() {
    this.clientes = JSON.parse(localStorage.getItem('data') || '[]');
  } //Fin constructor

  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    localStorage.setItem('data', JSON.stringify(this.clientes));
  }

  nuevoCliente(): Cliente {
    return {
      id: this.clientes.length,
      nombre: '',
      cif: '',
      direccion: '',
    };
  }
} //Fin clase
