import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmatupcComponent } from './Presentacion/armatupc/armatupc.component';
import { CarritoDeComprasComponent } from './Presentacion/carrito-de-compras/carrito-de-compras.component';
import { HomeComponent } from './Presentacion/home/home.component';
import { ListaProductosComponent } from './Presentacion/lista-productos/lista-productos.component';
import { LoginFloatComponent } from './Presentacion/login-float/login-float.component';
import { ProductoComponent } from './Presentacion/producto/producto.component';
import { RecomendacionesComponent } from './Presentacion/recomendaciones/recomendaciones.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'ArmarPC', component: ArmatupcComponent},
  {path: 'Recomendaciones', component: RecomendacionesComponent},
  {path: 'Carrito', component: CarritoDeComprasComponent},
  {path: 'Ingresar', component: LoginFloatComponent},
  {path: 'productos/:nombre', component: ListaProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
