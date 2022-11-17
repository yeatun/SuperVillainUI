import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';
import { List } from '../models/object.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  baseUrl ='https://localhost:7135/api/SuperVillain';

  constructor(private http:HttpClient) { }

  //Get all cards
  getAllCards(): Observable<List>{
    return this.http.get<List>(this.baseUrl);

  }
  Post(card: Card): Observable<Card> {
    card.id ='0';
   return this.http.post<Card>(this.baseUrl, card);
  }
  deleteCard(id:string): Observable<Card>{
   return this.http.delete<Card>(this.baseUrl+ '/'+ id);
  }
  updateCard(card: Card): Observable<Card> {
    return this.http.put<Card>(this.baseUrl+ '/' + card.id,card);
  }
}
