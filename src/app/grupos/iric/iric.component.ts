import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {


  alumnosIric:any[]=[
    {
      matricula:19002228,
      nombre:'Puga',
      edad:23,
      correo:'carlospuga39@gmail.com',
      foto:'https://th.bing.com/th/id/OIP.VC3VocGRslZq96ECVSHcjwEsDh?pid=ImgDet&rs=1'
    },
    {
      matricula:12345,
      nombre:'Alan',
      edad:21,
      correo:'alan@gmail.com',
      foto:'https://th.bing.com/th/id/OIP.VC3VocGRslZq96ECVSHcjwEsDh?pid=ImgDet&rs=1'
    },
    {
      matricula:6789,
      nombre:'pedro',
      edad:21,
      correo:'pedro@gmail.com',
      foto:'https://th.bing.com/th/id/OIP.VC3VocGRslZq96ECVSHcjwEsDh?pid=ImgDet&rs=1'
    }
  ]

}
