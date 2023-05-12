import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalago.component.html',
  styleUrls: ['./catalago.component.css']
})
export class CatalogoComponent implements OnInit {

  menuopc!: string | null;

  constructor(private route: ActivatedRoute) {}

  movies: any = [
    {img: "../../assets/img/chihiro.jpeg", title: "El Viaje de Chihiro"},
    {img: "../../assets/img/forrestGump.jpg", title: "Forrest Gump"},
    {img: "../../assets/img/luciernagas.jpg", title: "La tumba de las luciérnagas"},
    {img: "../../assets/img/padrino.jpg", title: "El Padrino"},
    {img: "../../assets/img/spiderman.jpg", title:"Spider-Man: Un Nuevo Universo"},
    {img: "../../assets/img/TiemposViolentos.jpg", title: "Tiempos Violentos"},
    {img: "../../assets/img/whiplash.jpg", title: "Whiplash"},
    {img: "../../assets/img/yourName.jpg", title: "Your Name"},
    {img: "../../assets/img/evangelion.jpg", title: "Neon Genesis Evangelion: The End"},
    {img: "../../assets/img/jedi.jpg", title:"Star Wars: El Regreso del Jedi"},
    {img: "../../assets/img/futuro.jpg", title: "Volver al Futuro"},
    {img: "../../assets/img/xmen.jpg", title:"X-Men 1"},
    {img: "../../assets/img/mind.webp", title:"Eterno Resplandor: De una mente sin recuerdo"}
  ]

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.menuopc = params.get('opcion');
    });
  }
   
}