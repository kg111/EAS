import { Injectable } from '@angular/core';
import {HttpClient , HttpResponse}  from '@angular/common/http';

import {observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:61458';

  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

}
