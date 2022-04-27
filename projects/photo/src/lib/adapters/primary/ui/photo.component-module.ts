import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';

@NgModule({ imports: [CommonModule],
  	declarations: [PhotoComponent],
  	providers: [],
  	exports: [PhotoComponent] })
export class PhotoComponentModule {
}
