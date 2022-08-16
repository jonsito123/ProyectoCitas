import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarCitasComponent } from './componentes/listar-citas/listar-citas.component';
import { CrearCitaComponent } from './componentes/crear-cita/crear-cita.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListarCitasComponent,
    CrearCitaComponent
  ],
  //lo que vamos a necesitar pe
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
