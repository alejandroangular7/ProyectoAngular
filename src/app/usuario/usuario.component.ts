import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  name : String;
  lastName : String;
  nickName : String;
  age : Number;
  fecha: Date;
  tituloH3: String;
  direccion : Direccion;

  constructor() { }

  ngOnInit() {
    this.name = "Israel";
    this.lastName = "Alejandro";
    this.nickName = "iloera";
    this.age = 25
    this.fecha = new Date();

    this.tituloH3 = "Mi datos";
    this.direccion = new Direccion("Toreros 578", "Guadalajara Jalisco");
  }

}

class Direccion {
  calle: String;
  estado : String;

  constructor(calle : String, estado : String){
    this.calle = calle;
    this.estado = estado;
  }
}
