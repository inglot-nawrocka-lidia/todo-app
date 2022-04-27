import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoDTO } from './photo.dto';

export const GETS_ALL_PHOTO_DTO = new InjectionToken<GetsAllPhotoDtoPort>('GETS_ALL_PHOTO_DTO');

export interface GetsAllPhotoDtoPort {
  getAll(criterion?: Partial<PhotoDTO>): Observable<PhotoDTO[]>;
}
