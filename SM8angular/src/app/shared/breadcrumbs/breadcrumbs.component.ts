import { Component, OnInit } from '@angular/core';
//import { Configuracion } from '.../models/configuracion';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {
	public title;
	public config;

  constructor() { 
  	//this.config = Configuracion;
 	this.title = 'Aplicación SM8Omega';
  }

  ngOnInit(): void {
  }

}
