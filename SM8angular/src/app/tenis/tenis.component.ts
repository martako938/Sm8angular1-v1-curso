import { Component } from '@angular/core';

@Component({
	selector: 'tenis',
	templateUrl: './tenis.component.html'
})

export class TenisComponent{
	public titulo: string;

	constructor(){
		this.titulo = "Componente de Tenis";
		console.log("Se ha cargado el componente: tenis.component");
	}

}