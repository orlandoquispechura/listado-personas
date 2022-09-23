import { Component } from '@angular/core';
import { Persona } from './Models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto Listado de personas';
  personas: Persona[] = [
    new Persona('carmen', "medellin"),
    new Persona("Benjamin", "Burgoa"),
    new Persona("Luis Carlos ", "Uriola")
    // {nombre: "Benjamin", apellidos:"Burgoa"},
    // {nombre: "Luis Carlos ", apellidos:"Uriola"},
    // {nombre: "Maria Luisa", apellidos:"Bush"}
  ]



  registrarPersona(persona:Persona){
  this.personas.push(persona);
  }
}
