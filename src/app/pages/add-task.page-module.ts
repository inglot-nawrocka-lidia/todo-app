import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import { AddTaskComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/add-task.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';
import { TaskListComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebasePhotoServiceModule } from '@photo';
import { HomePageComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/home-page.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AddTaskPage,
        }
      ]),
  AddTaskComponentModule,
  FirebaseTaskServiceModule,
  TaskListComponentModule,
  FirebasePhotoServiceModule,
  HomePageComponentModule
],
  	declarations: [AddTaskPage],
  	providers: [],
  	exports: [] })
export class AddTaskPageModule {
}
