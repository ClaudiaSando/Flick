import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  inicio!: {navabout: string};


  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.inicio = {
      navabout: this.rutaActiva.snapshot.params['navabout'],
    };
    this.rutaActiva.params.subscribe(
    (params: Params) => {
    this.inicio['navabout'] = params['navabout'];
    }
    );
   
    }

}
