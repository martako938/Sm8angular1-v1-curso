import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verempleados',
  templateUrl: './verempleados.component.html',
  styleUrls: ['./verempleados.component.css']
})
export class VerempleadosComponent implements OnInit {

  public titulo_pagina: string;

  constructor() { 

    this.titulo_pagina = "Ver empleados";

  }

  ngOnInit(): void {
  }

}
