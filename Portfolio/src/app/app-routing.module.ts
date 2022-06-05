import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

const routes: Routes = [
  {path:'',component: InicioComponent, pathMatch: 'full'},
  {path:'Estudios',component: EstudiosComponent},
  {path:'Experiencia', component: ExperienciaComponent},
  {path:'Trabajos', component: TrabajosComponent},
  {path:'SobreMi',component: SobreMiComponent}
];

@NgModule({
  imports: [ CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
