import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({ imports: [
	CommonModule, 
	ReactiveFormsModule,
	BsDropdownModule.forRoot(),
	ModalModule.forRoot(),
	RouterModule
],
  	declarations: [TaskListComponent],
  	providers: [],
  	exports: [TaskListComponent] })
export class TaskListComponentModule {
}
