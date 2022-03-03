import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pinc-web/validarIdent/cliente',
    pathMatch: 'full'
  },
  {
    path: 'pinc-web',
    loadChildren: () => import('./modules/pinc-web/pinc-web.module').then((m)=>m.PincWebModule)
  },
  {
    path: 'afiliacion-web',
    loadChildren: () => import('./modules/afiliacion-web/afiliacion-web.module').then((m)=>m.AfiliacionWebModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
