import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentesRoutingModule } from './componentes-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CasaComponent } from './casa/casa.component';


@NgModule({
  declarations: [
    CatalogoComponent,
    ContactoComponent,
    NavegacionComponent,
    NosotrosComponent,
    CasaComponent
  ],
  exports: [
    NavegacionComponent,
    CasaComponent
  ],
  imports: [
    CommonModule,
    ComponentesRoutingModule
  ]
})
export class ComponentesModule { }
