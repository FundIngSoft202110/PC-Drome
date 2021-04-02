import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/home/home.component';
import { LoginFloatComponent } from './presentation/login-float/login-float.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFloatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
