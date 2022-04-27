import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DateComponentModule } from '@date';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
