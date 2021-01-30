import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregarempleado',
  templateUrl: './agregarempleado.component.html',
  styleUrls: ['./agregarempleado.component.css']
})
export class AgregarempleadoComponent implements OnInit {

  public titulo_pagina: string;

  constructor() {
    
    this.titulo_pagina = "Agregar empleado";

  }

  ngOnInit(): void {
  }

}
