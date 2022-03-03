import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { PincWebRoutingModule } from './pinc-web-routing.module';
import { ValidarIdenComponent } from './components/validar-iden/validar-iden.component';
import { ClienteComponent } from './components/validar-iden/cliente/cliente.component';
import { NuevoClienteComponent } from './components/validar-iden/cliente/nuevo-cliente/nuevo-cliente.component';


@NgModule({
  declarations: [
  
    ValidarIdenComponent,
       ClienteComponent,
       NuevoClienteComponent
  ],
  imports: [
    CommonModule,
    PincWebRoutingModule,
    MatSliderModule
  ]
})
export class PincWebModule { }
