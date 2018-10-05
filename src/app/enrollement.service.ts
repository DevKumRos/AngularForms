import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EnrollementService {

  _url = "http://localhost:9092/enrollment/save"
  constructor(private _http: HttpClient) { }
  
  enroll(user : User): Observable<User> {
   return  this._http.post<any>(this._url, user);
  }
}
