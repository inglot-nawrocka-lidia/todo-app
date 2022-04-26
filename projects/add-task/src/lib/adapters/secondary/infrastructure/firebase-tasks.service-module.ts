import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTasksService } from './firebase-tasks.service';
import { ADDS_ADD_TASK_DTO } from '../../../application/ports/secondary/adds-add-task.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTasksService, { provide: ADDS_ADD_TASK_DTO, useExisting: FirebaseTasksService }],
  	exports: [] })
export class FirebaseTasksServiceModule {
}
