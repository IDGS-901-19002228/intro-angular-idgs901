import { Component, EventEmitter ,Input, Output  } from '@angular/core';

@Component({
  selector: 'app-calificacion-alum',
  templateUrl: './calificacion-alum.component.html',
  styleUrls: ['./calificacion-alum.component.css']
})
export class CalificacionAlumComponent {

  @Input() califica!: number; //pasar parametros al llamar un componente desde una clase padre- hijo 
  @Output() calificaClik:EventEmitter<string> = new EventEmitter();
  puntosCal!:number;
  ngOnChanges():void{
    this.puntosCal= this.califica * 76/10;
  }

  onClick(){
    this.calificaClik.emit(`Has calificado al alumno ${this.califica}`)
  }

}
