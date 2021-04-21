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
