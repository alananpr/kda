import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaComponent } from './componentes/casa/casa.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { AdornosComponent } from './componentes/productos/adornos/adornos.component';
import { BatucadaComponent } from './componentes/productos/batucada/batucada.component';
import { DecorativosComponent } from './componentes/productos/decorativos/decorativos.component';
import { GlobometalicoComponent } from './componentes/productos/globometalico/globometalico.component';
import { GlobosComponent } from './componentes/productos/globos/globos.component';
import { MasComponent } from './componentes/productos/mas/mas.component';
import { ProductosModule } from './componentes/productos/productos.module';
import { VelasComponent } from './componentes/productos/velas/velas.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'casa', component: CasaComponent},
    {path: 'adornos', component: AdornosComponent},
    {path: 'batucada', component: BatucadaComponent},
    {path: 'decorativos', component: DecorativosComponent},
    {path: 'globos', component: GlobosComponent},
    {path: 'globometalico', component: GlobometalicoComponent},
    {path: 'velas', component: VelasComponent},
    {path: 'mas', component: MasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
