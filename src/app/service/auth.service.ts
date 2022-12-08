import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7135/api/"
  constructor(private http : HttpClient,private router: Router) { }

  signUp(user:User): Observable<User>{
    // user.token="123eee";
    // user.roles=""
    user.roles=['Admin']
    return this.http.post<User>(`${this.baseUrl}User/Create`,user)
  }
  login(loginObj:User){
    return this.http.post<any>(`${this.baseUrl}Auth/Login`,loginObj)
  }
  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return  localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
    // localStorage.removeItem('token')
  }
}
