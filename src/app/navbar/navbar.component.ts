import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  opcion!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.opcion = params.get('opcion');
    });
  }
  
}
