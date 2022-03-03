import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/validar-iden/cliente/cliente.component';
import { NuevoClienteComponent } from './components/validar-iden/cliente/nuevo-cliente/nuevo-cliente.component';
import { ValidarIdenComponent } from './components/validar-iden/validar-iden.component';

const routes: Routes = [
  {
    path: 'validarIdent',
    component: ValidarIdenComponent,
    children: [
      {
        path: 'cliente',
        component: ClienteComponent,
        children:[
          {
            path: 'nuevo',
            component: NuevoClienteComponent,
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'validarIdent',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'validarIdent',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PincWebRoutingModule { }
