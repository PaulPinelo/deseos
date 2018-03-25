import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PendientesComponent } from '../pages/pendientes/pendientes.component';
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { AgregarComponent} from "../pages/agregar/agregar.component";
import { DetalleComponent} from "../pages/detalle/detalle.component";

//servicios
import {ListaDeseosService} from "./services/lista-deseos.service";
//pipes
import {PlaceholderPipe} from "./pipes/placeholder.pipe";
import {PendientesPipe} from "./pipes/pendientes.pipes";

@NgModule({
  declarations: [
    MyApp,
    PlaceholderPipe,
    PendientesPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    DetalleComponent,
    TabsPage
  ],
  providers: [
    ListaDeseosService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
