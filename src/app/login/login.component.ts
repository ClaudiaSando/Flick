import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inicio!: {navlogin: string};


  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.inicio = {
      navlogin: this.rutaActiva.snapshot.params['navlogin'],
    };
    this.rutaActiva.params.subscribe(
    (params: Params) => {
    this.inicio['navlogin'] = params['navlogin'];
    }
    );
   
    }
   
}
