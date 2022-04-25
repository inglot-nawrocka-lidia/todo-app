import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePagePage } from './home-page.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePagePage,
        }
      ])],
  	declarations: [HomePagePage],
  	providers: [],
  	exports: [] })
export class HomePagePageModule {
}
