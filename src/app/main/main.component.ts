import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  
  
  posters: any = [
    {img: "../../assets/img/guardianes.jpg", titulo: "Guardianes Vol. 3", pagar: "Comprar"},
    {img: "../../assets/img/mario2.webp", titulo: "Super Mario Bros", pagar: "Comprar"},
    {img: "../../assets/img/john.jpg", titulo: "John Wick 3 Remaster", pagar: "Comprar"},
    {img: "../../assets/img/oppen.webp", titulo: "Oppenheimer", pagar: "Reservar"},
    {img: "../../assets/img/barbie.jpg", titulo: "Barbie", pagar: "Reservar"},
    {img: "../../assets/img/exorcista.jpg", titulo: "Exorcista del Papa", pagar: "Comprar"},
    {img: "../../assets/img/evil.jpg", titulo: "Evil Dead Rise", pagar: "Comprar"},
    {img: "../../assets/img/flash.webp", titulo: "The Flash", pagar: "Reservar"}
  ];

  checkDate($event: any){
    $event.preventDefault();
    
    
  }

  onCheckDate(fecha: any){
    console.log(fecha);
    if(fecha === ""){
      alert("pon algo we");
    }else{
      alert("iraloo");
      console.log(typeof fecha);
    }
  }
}
