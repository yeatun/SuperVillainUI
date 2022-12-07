import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { List } from '../models/object.model';

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
  deleteCard(id:string): Observable<Card>{
   return this.http.delete<Card>(`${this.baseUrl}Delete`+ '/'+ id);
  }
  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.baseUrl}Edit`+ '/' + card.id,card);
  }
}
