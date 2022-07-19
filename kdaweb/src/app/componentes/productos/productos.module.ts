import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AdornosComponent } from './adornos/adornos.component';
import { BatucadaComponent } from './batucada/batucada.component';
import { DecorativosComponent } from './decorativos/decorativos.component';
import { GlobosComponent } from './globos/globos.component';
import { VelasComponent } from './velas/velas.component';
import { MasComponent } from './mas/mas.component';
import { GlobometalicoComponent } from './globometalico/globometalico.component';


@NgModule({
  declarations: [
    AdornosComponent,
    BatucadaComponent,
    DecorativosComponent,
    GlobosComponent,
    VelasComponent,
    MasComponent,
    GlobometalicoComponent
  ],
  exports:[
    AdornosComponent,
    BatucadaComponent,
    DecorativosComponent,
    GlobosComponent,
    VelasComponent,
    MasComponent,
    GlobometalicoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
