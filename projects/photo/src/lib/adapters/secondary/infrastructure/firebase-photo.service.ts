import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllPhotoDtoPort } from '../../../application/ports/secondary/gets-all-photo.dto-port';
import { PhotoDTO } from '../../../application/ports/secondary/photo.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebasePhotoService implements GetsAllPhotoDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<PhotoDTO>): Observable<PhotoDTO[]> {
    return this._client
    .collection<PhotoDTO>('photo')
    .valueChanges(({idField: 'id'}))
    .pipe(map((data: PhotoDTO[]) => filterByCriterion(data, criterion)));
  }
}
