import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { DateComponentModule } from '@date';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebasePhotoServiceModule, PhotoComponentModule } from '@photo';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateComponentModule,
    AngularFireModule.initializeApp(environment.firebase),
    PhotoComponentModule,
    FirebasePhotoServiceModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
