import {Component} from '@angular/core';

@Component({
    selector:'app-ievn',
    templateUrl: './ievn.component.html',
})

export class ievnComponent{
    constructor(){}
    alumno = {
        matricula:1234,
        nombre:'Pablo',
        edad:21,
        fechaNacimiento:new Date(),
        pago:1230.38
      };
}