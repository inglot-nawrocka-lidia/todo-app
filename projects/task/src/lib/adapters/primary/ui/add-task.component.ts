
import { FormGroup, FormControl } from '@angular/forms';
import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Inject
} from '@angular/core';
import { AddsTaskDtoPort, ADDS_TASK_DTO } from '../../../application/ports/secondary/adds-task.dto-port';
import { RemovesTaskDtoPort, REMOVES_TASK_DTO } from '../../../application/ports/secondary/removes-task.dto-port';

@Component({
    selector: 'lib-add-task',
    templateUrl: './add-task.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent {
    readonly task: FormGroup = new FormGroup({ task: new FormControl() });
  
    constructor(
      @Inject(ADDS_TASK_DTO) private _addsAddTaskDto: AddsTaskDtoPort,
      @Inject(REMOVES_TASK_DTO)
      private _removesTaskDto: RemovesTaskDtoPort
    ) {}
  
    onAddTaskSubmited(addTask: FormGroup): void {
      this._addsAddTaskDto.add({
        task: addTask.get('task')?.value,
        created: new Date().getTime(),
      });
      this.task.reset();
    }
    cancelAnimationFrame(): void {
      this.task.reset();
    }

   }
    
    
