import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./grupos/iric/iric.component";
import { OperasBasComponent } from "./grupos/formularios/operas-bas/operas-bas.component";
import { HomeComponent } from "./home/home.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";
import { SumaComponent } from "./grupos/formularios/suma/suma.component";

const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'IricComponent', component: IricComponent },
    {path: 'OperasBasComponent', component: OperasBasComponent },
    {path: 'AlumnoReactiveComponent', component: AlumnoReactiveComponent },
    {path: 'SumaComponent', component: SumaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}
