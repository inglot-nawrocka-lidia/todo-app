import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePageModule } from './pages/home-page.page-module';
import { AddTaskPageModule } from './pages/add-task.page-module';

const routes: Routes = [{ 
        path: 'home-page', 
        loadChildren: () => HomePagePageModule
      },
  { 
        path: 'add-task', 
        loadChildren: () => AddTaskPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
