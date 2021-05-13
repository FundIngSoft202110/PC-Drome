import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Presentacion/home/home.component';
import { ProductoComponent } from './Presentacion/producto/producto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'producto/:id', component: ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
