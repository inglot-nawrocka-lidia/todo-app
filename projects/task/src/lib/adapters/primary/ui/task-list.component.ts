import { 
    Component, 
    ViewEncapsulation, 
    ChangeDetectionStrategy,
    Inject,
    TemplateRef,
        
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort} from '../../../application/ports/secondary/gets-all-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';
import { SETS_TASK_DTO, SetsTaskDtoPort  } from '../../../application/ports/secondary/sets-task.dto-port';

import {  FormGroup, FormControl } from '@angular/forms';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal'


import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';

@Component({ 
    selector: 'lib-task-list', 
    templateUrl: './task-list.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })


    export class TaskListComponent {
        tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto
          .getAll()
          .pipe(map((task: TaskDTO[]) => task.sort((a, b) => b.created - a.created)));
        created$: Observable<number> = this.tasks$.pipe(
          map((taskList) => {
            return taskList.filter((task) => task.done).length;
          })
        );
        readonly setTask: FormGroup = new FormGroup({ setTask: new FormControl() });
        modalRef?: BsModalRef;
      
        deleteTaskAlert = false;
        completeTaskAlert = false;
      
        constructor(
          private modalService: BsModalService,
          @Inject(GETS_ALL_TASK_DTO)
          private _getsAllTaskDto: GetsAllTaskDtoPort,
          @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
          @Inject(REMOVES_TASK_DTO)
          private _removesTaskDto: RemovesTaskDtoPort, @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort ) {}
      
        onItemClicked(setTask: any): void {
          if (setTask.done === false) {
            this._setsTaskDto.set({
              id: setTask.id,
              done: true,
            });
          } else {
            this._setsTaskDto.set({
              id: setTask.id,
              done: false,
            });
          }
        }
      
        removeTask(taskId: string): void {
          this._removesTaskDto.remove(taskId);
        }
        openModal(template: TemplateRef<any>) {
          this.modalRef = this.modalService.show(template);
        }
      
        showDeleteTask() {
          this.deleteTaskAlert = true;
          this.completeTaskAlert = false;
        }
      
        showCompleteTask(TaskChecked: boolean) {
          this.deleteTaskAlert = false;
          this.completeTaskAlert = true;
        }
}
