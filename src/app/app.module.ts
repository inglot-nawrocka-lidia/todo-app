import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateComponentModule } from '@date';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



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
