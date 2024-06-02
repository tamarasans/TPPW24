import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ServerComponent } from './server/server.component';
import { NuovoServerComponent } from './nuovo-server/nuovo-server.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ServerComponent,
    NuovoServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
