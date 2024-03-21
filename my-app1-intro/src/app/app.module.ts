import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AmministratoreComponent } from './amministratore/amministratore.component';
import { UtenteComponent } from './utente/utente.component';

@NgModule({
  declarations: [
    AppComponent,
    AmministratoreComponent,
    UtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
