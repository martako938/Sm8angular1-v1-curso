import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
	selector: 'videojuego',
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
	public titulo: string;
	public listado: string;
	
	constructor(){
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de juegos mas populares";

		console.log("Se ha cargado el componente: videojuego.component");
	}

	ngOnInit(){
		console.log("OnInit ejecutandose!!");
	}

	ngDoCheck(){
		console.log("DoCheck ejecutandose!!");
	}

	ngOnDestroy(){
		console.log("OnDestroy ejecutandose!!")
	}

	cambiarTitulo(){
		this.titulo = "Nuevo título del componente";
	}

}