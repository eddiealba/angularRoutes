import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerrosComponent } from './perros/perros.component';
import { GatosComponent } from './gatos/gatos.component';
import { PericosComponent } from './pericos/pericos.component';

const routes: Routes = [
  {
    path: 'perros',
    component:PerrosComponent
  },
  {
    path: 'gatos',
    component:GatosComponent
  },
  {
    path: 'pericos',
    component:PericosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
