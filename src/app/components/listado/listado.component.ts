import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/Models/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
@Input() persona!: Persona;
 
  constructor() { }

  ngOnInit(): void {
  }

}
