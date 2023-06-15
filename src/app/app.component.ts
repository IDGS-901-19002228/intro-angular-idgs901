import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs901';

  alumno = {
    matricula:19002228,
    nombre:'Puga',
    edad:23,
    fechaNacimiento:new Date(),
    pago:128.38
  };
  calcular(n:number):number{
    return n*2;
  }
}

