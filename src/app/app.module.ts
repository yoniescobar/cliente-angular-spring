import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { HttpClientModule } from '@angular/common/http'; // Importar el modulo HTTP para hacer peticiones

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Importar el modulo HTTP para hacer peticiones
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
