import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';


@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [HomePageComponent],
  	providers: [],
  	exports: [HomePageComponent] })
export class HomePageComponentModule {
}
