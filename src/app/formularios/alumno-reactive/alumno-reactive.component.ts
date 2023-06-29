import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnoForm!: FormGroup;
  alumnos: any[] = [];

  constructor(private readonly fb: FormBuilder) {

    this.alumnoForm = this.initForm()
    
  }

  onSubmit():void{
    //console.log('Form ->', this.alumnoForm.value)
    this.obtenerDatos();
  }

  obtenerDatos():void{

    /*const mat = this.alumnoForm.get('matricula')?.value
    console.log('matricula',mat)
    const nom = this.alumnoForm.get('nombre')?.value
    console.log('nombre',nom)*/

    const alumno = {
      matricula: this.alumnoForm.get('matricula')?.value,
      nombre: this.alumnoForm.get('nombre')?.value,
      edad: this.alumnoForm.get('edad')?.value,
      correo: this.alumnoForm.get('correo')?.value,
      foto: this.alumnoForm.get('foto')?.value,
      calif: this.alumnoForm.get('calif')?.value
    };
    this.alumnos.push(alumno);
    this.alumnoForm.reset();

  }

  initForm(): FormGroup {
    return this.fb.group({
      matricula: ['',[Validators.required, Validators.minLength(5)]],
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      edad: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      foto: [''],
      calif: ['',[Validators.required]]
    })
  }

}
