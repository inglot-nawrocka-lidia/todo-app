import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePagePage } from './home-page.page';
import { HomePageComponentModule } from '../../../projects/task/src/lib/adapters/primary/ui/home-page.component-module';

@NgModule({ imports: [CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: HomePagePage,
        }
      ]),
      HomePageComponentModule
],
  	declarations: [HomePagePage],
  	providers: [],
  	exports: [] })
export class HomePagePageModule {
}
