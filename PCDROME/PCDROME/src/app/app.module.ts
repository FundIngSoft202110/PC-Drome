import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Presentacion/home/home.component';
import { LoginFloatComponent } from './Presentacion/login-float/login-float.component';
import { ArmatupcComponent } from './Presentacion/armatupc/armatupc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMenuComponent } from './Presentacion/header-menu/header-menu.component';
import { RegisterFloatComponent } from './Presentacion/register-float/register-float.component';
import { ProductsSectionHomeComponent } from './Presentacion/products-section-home/products-section-home.component';
import { FooterComponent } from './Presentacion/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { PerfilDeUsuarioComponent } from './Presentacion/perfil-de-usuario/perfil-de-usuario.component';
import { GestionProductosComponent } from './Presentacion/gestion-productos/gestion-productos.component';
import { CarritoDeComprasComponent } from './Presentacion/carrito-de-compras/carrito-de-compras.component';
import { PagarPedidoComponent } from './Presentacion/pagar-pedido/pagar-pedido.component';
import { RecomendacionesComponent } from './Presentacion/recomendaciones/recomendaciones.component';
import { ResultadosDeBusquedaComponent } from './Presentacion/resultados-de-busqueda/resultados-de-busqueda.component';
import { ChatComponent } from './Presentacion/chat/chat.component';
import { ProductoComponent } from './Presentacion/producto/producto.component';
import { ListaProductosComponent } from './Presentacion/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFloatComponent,
    ArmatupcComponent,
    HeaderMenuComponent,
    RegisterFloatComponent,
    ProductsSectionHomeComponent,
    FooterComponent,
    PerfilDeUsuarioComponent,
    GestionProductosComponent,
    CarritoDeComprasComponent,
    PagarPedidoComponent,
    RecomendacionesComponent,
    ResultadosDeBusquedaComponent,
    ChatComponent,
    ProductoComponent,
    ListaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
