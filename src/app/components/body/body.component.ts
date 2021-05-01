import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  comentarios : any[] = [
    {
      nombre : "Sebastian Marroquin",
      username : "@sebastian",
      comentario : "Hola Mundo."
    },
    {
      nombre : "Jose Perez",
      username : "@jPerez",
      comentario : "Nuevo comentario"
    }
  ];

  // Creacion de variables
  nombre : any;
  comentario : any;

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentario(){
    let auxComments = {
      nombre : this.nombre,
      username : `@${this.nombre}`,
      comentario : this.comentario
    }
    // Agregando el comentario al arreglo
    this.comentarios.push(auxComments);
  }

  deleteComent(index : any){
    // Eliminar un solo elemento en el arreglo
    this.comentarios.splice(index, 1)
  }

}
