import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from 'src/app/Models/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() guardarPersona = new EventEmitter<Persona>();

  nombreInput: string = '';
  apellidosInput: string = '';

  registrar() {
    let persona1 =new Persona(this.nombreInput, this.apellidosInput);
    this.guardarPersona.emit(persona1);
    console.log(persona1);
  }
}
