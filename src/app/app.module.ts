import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TicketsAndonComponent } from './tickets-andon/tickets-andon.component';


@NgModule({
  declarations: [
    TicketsAndonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
  //bootstrap: [TicketsAndonComponent]
})
export class AppModule { }
