import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebasePhotoService } from './firebase-photo.service';
import { GETS_ALL_PHOTO_DTO } from '../../../application/ports/secondary/gets-all-photo.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebasePhotoService, { provide: GETS_ALL_PHOTO_DTO, useExisting: FirebasePhotoService }],
  	exports: [] })
export class FirebasePhotoServiceModule {
}
