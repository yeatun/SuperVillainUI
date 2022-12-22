import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { List } from '../models/object.model';
import {  throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  baseUrl ='https://localhost:7135/api/SuperVillain/';

  constructor(private http:HttpClient) { }

  //Get all cards
  getAllCards(): Observable<Card[]>{
    return this.http.get<Card[]>(`${this.baseUrl}GetAll`);

  }
  Post(card: Card): Observable<Card> {
    card.id ='0';
   return this.http.post<Card>(`${this.baseUrl}Create`, card);
  }
  deleteCard(id:string){
   return this.http.delete(`${this.baseUrl}Delete/`+ id ,{  responseType: 'text' })
 
  }
  
  // updateCard(): Observable<Card> {
  //   return this.http.put<Card>(`${this.baseUrl}Edit`+ '/' + card.id,card);
  // }
  updateCard(id:string,updateCardRequest:Card): Observable<Card>  {
    return this.http.put<Card>(`${this.baseUrl}Edit/`+ id,updateCardRequest);
  }
  getcards(id:string): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}` + id);
  }
}
