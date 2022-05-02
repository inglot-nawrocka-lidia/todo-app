import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePagePage } from './home-page.page';
import { PhotoComponentModule } from '../../../projects/photo/src/lib/adapters/primary/ui/photo.component-module';
import { FirebasePhotoServiceModule } from '../../../projects/photo/src/lib/adapters/secondary/infrastructure/firebase-photo.service-module';
import { AddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';
import { TaskListComponentModule } from '@task';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePagePage,
        }
      ]),
      AddTaskComponentModule,
      FirebaseTaskServiceModule,
      TaskListComponentModule,
      PhotoComponentModule,
      FirebasePhotoServiceModule,     
],
  	declarations: [HomePagePage],
  	providers: [],
  	exports: [] })
export class HomePagePageModule {
}
