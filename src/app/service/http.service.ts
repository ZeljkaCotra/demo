import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFindError } from '../common/not-find-error';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = "https://api.myjson.com/bins/1gwnal";

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.url)
      .pipe(
        catchError((err: Response) => {
          if (err.status == 404) {
            return Observable.throw(new NotFindError(err.json()));
          } else {
            return throwError(err.json());
          }
        })
      );
  }
}
