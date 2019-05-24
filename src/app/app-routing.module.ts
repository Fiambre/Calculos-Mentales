import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculosComponent } from './calculos/calculos.component';

const routes: Routes = [
  {
    path: '',
    component: CalculosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
