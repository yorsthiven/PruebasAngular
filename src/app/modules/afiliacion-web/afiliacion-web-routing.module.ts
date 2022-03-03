import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'clienteAfil/',
  },
  {
    path: 'clienteAfil',
    loadChildren: () => import('./modules/cliente/cliente.module').then((m)=>m.ClienteModule)
  },
  {
    path: '**',
    redirectTo: 'clienteAfil',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfiliacionWebRoutingModule { }
