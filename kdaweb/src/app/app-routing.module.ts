import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaComponent } from './componentes/casa/casa.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'casa', component: CasaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
