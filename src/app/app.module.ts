import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { DateComponentModule } from '@date';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebasePhotoServiceModule, PhotoComponentModule } from '@photo';






@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateComponentModule,
    AngularFireModule.initializeApp(environment.firebase),
    PhotoComponentModule,
    FirebasePhotoServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
