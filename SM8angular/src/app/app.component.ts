import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Bienvenido SM8 Angular 11';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config: object;

  constructor(){
  	this.config = Configuracion;
  	this.title = Configuracion.titulo;
  	this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos(value: boolean){
  	this.mostrar_videojuegos = value;
  }

}
