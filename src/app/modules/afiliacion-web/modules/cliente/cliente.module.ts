import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { LoginComponent } from './components/login/login.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CompartidoModule } from 'src/app/librerias/compartido.module';
import { AfiliacionWebModule } from '../../afiliacion-web.module';


@NgModule({
  declarations: [
    LoginComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    AfiliacionWebModule
  ]
})
export class ClienteModule { }
