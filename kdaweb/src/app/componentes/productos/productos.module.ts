import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AdornosComponent } from './adornos/adornos.component';
import { BatucadaComponent } from './batucada/batucada.component';
import { DecorativosComponent } from './decorativos/decorativos.component';
import { GlobosComponent } from './globos/globos.component';
import { VelasComponent } from './velas/velas.component';
import { MasComponent } from './mas/mas.component';


@NgModule({
  declarations: [
    AdornosComponent,
    BatucadaComponent,
    DecorativosComponent,
    GlobosComponent,
    VelasComponent,
    MasComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
