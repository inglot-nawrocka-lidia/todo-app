import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DateComponent } from './date.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({ imports: [CommonModule, BrowserModule],
  	declarations: [DateComponent],
  	providers: [DatePipe],
  	exports: [DateComponent] })
export class DateComponentModule {
}
