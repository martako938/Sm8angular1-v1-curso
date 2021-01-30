import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public titulo_pagina: string;

  constructor() {
      this.titulo_pagina = "Inicio";
   }

  ngOnInit(): void {
  }

}
