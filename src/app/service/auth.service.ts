import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7135/api/User/"
  constructor(private http : HttpClient) { }

  signUp(user:User): Observable<User>{
    user.token="123eee";
    user.role=""
    return this.http.post<User>(`${this.baseUrl}/register`,user)
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}/authenticate`,loginObj)
  }
}
