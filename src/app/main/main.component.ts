import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  libre: boolean = true;
  click: boolean = false;

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

  checkDate($event: any) {
    $event.preventDefault();
  }

  onCheckDate(fecha: any): boolean {
    this.libre = true;
    console.log(fecha);

    if (fecha === '') {
      this.click = false;
    } else {
      this.click = true;
    }

    let fechasOcupadas = localStorage.getItem('fechasOcupadas') || null;
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
    return this.libre;
  }
}
