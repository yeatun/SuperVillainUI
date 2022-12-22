import { Component, OnInit } from '@angular/core';
import { Card } from './models/card.model';
import { AuthService } from './service/auth.service';
import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-angular-project';
  cards: Card[] =[];
  card: Card ={
    id: '',
    villainName: '',
    franchise:'',
    powers:'',
    imageURL: ''
  }

  constructor(private cardService:CardsService, private auth: AuthService){
   
  }
  ngOnInit(): void {
    // this.getAllCards();
   
  }
 
  // getAllCards(){
  //   this.cardService.getAllCards()
  //   .subscribe(
  //     response =>{
  //       this.cards=response;
      
  //       // console.log(response);
  //     }
  //   )
  // }
  // OnSubmit(){
  //   if(this.card.id ===''){
  //     this.cardService.Post(this.card)
  //     .subscribe(
  //       response=>{
  //         this.getAllCards();
  //         this.card= {
  //           id: '',
  //           villainName: '',
  //           franchise:'',
  //           powers:'',
  //           imageURL: ''
  //         };
  //       }
  //     );
  //   }
  //   else {
  //     this.updateCard(this.card);
  //   }

    

  // }
  // deleteCard(id: string){
  //   this.cardService.deleteCard(id)
  //   .subscribe(
  //     response=>{
  //       this.getAllCards();
  //     }
  //   )

  // }
  // populateForm(card:Card){
  //   this.card = card;

  // }
  // updateCard(card: Card){
  //   console.log(card)
  //   this.cardService.updateCard(card)
    
  //   .subscribe(
  //     response =>{
  //       // console.log(response)
  //       this.getAllCards();
  //     }
  //   )
  // }
}
