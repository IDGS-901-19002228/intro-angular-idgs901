import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})

export class IricComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!: string;

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=[
    {
      matricula:19002228,
      nombre:'Puga',
      edad:23,
      correo:'carlospuga39@gmail.com',
      foto:'https://th.bing.com/th/id/OIP.VC3VocGRslZq96ECVSHcjwEsDh?pid=ImgDet&rs=1',
      calif: 8.5
    },
    {
      matricula:12345572,
      nombre:'Alan',
      edad:21,
      correo:'alan@gmail.com',
      foto:'https://th.bing.com/th/id/OIP.sGJooYGSyOK7dTUEcy2NbgHaLG?pid=ImgDet&rs=1',
      calif: 7
    },
    {
      matricula:67890045,
      nombre:'Lucia',
      edad:21,
      correo:'lucia@gmail.com',
      foto:'https://th.bing.com/th/id/OIP.omVGoPzJk4emAICrhRalGQHaKt?pid=ImgDet&rs=1',
      calif: 10
    }
  ]

  onCalificaClick(message:string){
    this.alumnoTitle=`alumnos ${message}`;

  }

}
