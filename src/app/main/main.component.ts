import { Component, OnInit } from '@angular/core';
import { ClientesService, Cliente, Grupo } from '../clientes.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit{
  // Variables de servicio
  cliente!: Cliente;
  registro = false;
  grupos!: Grupo[];

  // Formulario
  formulario: FormGroup;

  // Variables confirmación fecha
  libre: boolean = true;
  click: boolean = false;
  nuevaFecha: string = '';
  listaDeFechas: any = localStorage.getItem("fechasOcupadas") || [];

  // Posters para la sección grid
  posters: any = [
    {
      img: '../../assets/img/guardianes.jpg',
      titulo: 'Guardianes Vol. 3',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/mario2.webp',
      titulo: 'Super Mario Bros',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/john.jpg',
      titulo: 'John Wick 3 Remaster',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/oppen.webp',
      titulo: 'Oppenheimer',
      pagar: 'Reservar',
    },
    { img: '../../assets/img/barbie.jpg', titulo: 'Barbie', pagar: 'Reservar' },
    {
      img: '../../assets/img/exorcista.jpg',
      titulo: 'Exorcista del Papa',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/evil.jpg',
      titulo: 'Evil Dead Rise',
      pagar: 'Comprar',
    },
    {
      img: '../../assets/img/flash.webp',
      titulo: 'The Flash',
      pagar: 'Reservar',
    },
  ];

  // Constructor Servicio y validación formulario
  constructor(private clientesService: ClientesService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      cif: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.registro = false;
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  checkDate($event: any) {
    $event.preventDefault();
  }

  // Verificar fecha
  onCheckDate(fecha: any): boolean {
    this.libre = true;

    if (fecha === '') {
      this.click = false;
    } else {
      this.click = true;
    }

    let fechasOcupadas = localStorage.getItem('fechasOcupadas') || [];
    if (typeof fechasOcupadas === 'string') {
      let fechasArray = JSON.parse(fechasOcupadas);
      console.log(fechasArray);

      if (fechasArray != undefined) {
        for (let i = 0; i < fechasArray.length; i++) {
          if (fecha == fechasArray[i].fecha) {
            this.libre = false;
            console.log(this.libre);
            return this.libre;
          }
        }
      }
    }
    this.nuevaFecha = fecha;
    console.log(this.nuevaFecha);
    
    return this.libre;
  }

  nuevoCliente(): void {

    if(this.listaDeFechas.length > 0){
      this.listaDeFechas = JSON.parse(this.listaDeFechas);
    }
    
    let fechaRegistrada = {
      fecha: this.nuevaFecha
    }
    console.log(fechaRegistrada);
    

    this.listaDeFechas.push(fechaRegistrada);
    localStorage.setItem("fechasOcupadas",JSON.stringify(this.listaDeFechas));

    if (this.formulario?.valid) {
      const cliente: Cliente = {
        id: this.clientesService.getClientes()?.length,
        nombre: this.formulario.value.nombre,
        cif: this.formulario.value.cif,
        direccion: this.formulario.value.direccion,
        fecha: this.nuevaFecha
      };
      this.clientesService.agregarCliente(cliente);
      this.registro = true;
      this.openFinalModal();

    }
  }

  openFinalModal():void{
    const finalModalElemento = document.getElementById("modalFinal") as HTMLElement;
    const finalModal = new Modal(finalModalElemento);
    finalModal.show()
  }
  
}
