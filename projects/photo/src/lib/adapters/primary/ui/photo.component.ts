import { Observable } from 'rxjs';
import { PhotoDTO } from '../../../application/ports/secondary/photo.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_PHOTO_DTO, GetsAllPhotoDtoPort } from '../../../application/ports/secondary/gets-all-photo.dto-port';

@Component({ 
    selector: 'lib-photo', 
    templateUrl: './photo.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })

export class PhotoComponent {
    photo$: Observable<PhotoDTO[]> = this._getsAllPhotoDto.getAll();

  constructor(@Inject(GETS_ALL_PHOTO_DTO) private _getsAllPhotoDto: GetsAllPhotoDtoPort) {
  }
}
