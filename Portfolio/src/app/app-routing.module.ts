import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path:'',component: AppComponent},
  {path:'SobreMi',component: SobreMiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
