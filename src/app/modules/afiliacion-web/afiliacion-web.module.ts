import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionWebRoutingModule } from './afiliacion-web-routing.module';
import { CompartidoModule } from 'src/app/librerias/compartido.module';
import { PrimeNgModule } from 'src/app/librerias/prime-ng.module';
// import { ClienteComponent } from './components/cliente/cliente.component';
// import { LoginComponent } from './components/cliente/login/login.component';
// import { InformacionComponent } from './components/informacion/informacion.component';


@NgModule({
  declarations: [
    // ClienteComponent,
    // LoginComponent,
    // InformacionComponent
  ],
  imports: [
    CommonModule,
    AfiliacionWebRoutingModule,
    CompartidoModule,
  ],
  exports:[
    CompartidoModule,
  ]
})
export class AfiliacionWebModule { }
