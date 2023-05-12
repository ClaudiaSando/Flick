import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css'],
})
export class AltaClienteComponent implements OnInit {
  formulario: FormGroup;
  cliente!: Cliente;
  registro = false;
  grupos!: Grupo[];

  constructor(
    private clientesService: ClientesService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      cif: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      direccion: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.registro = false;
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    if (this.formulario.valid) {
      const cliente: Cliente = {
        id: this.clientesService.getClientes().length,
        nombre: this.formulario.value.nombre,
        cif: this.formulario.value.cif,
        direccion: this.formulario.value.direccion,
      };
      this.clientesService.agregarCliente(cliente);
      this.registro = true;
    }
  }
  
}
