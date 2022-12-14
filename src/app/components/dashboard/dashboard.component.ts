import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { AuthService } from 'src/app/service/auth.service';
import { CardsService } from 'src/app/service/cards.service';
// import { Card } from './models/card.model';
// import { CardsService } from './service/cards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'first-angular-project';
  cards: Card[] =[];
  // card: Card ={
  //   id: '',
  //   villainName: '',
  //   franchise:'',
  //   powers:'',
  //   imageURL: ''
  // }

  constructor(private cardService:CardsService, private auth: AuthService,private router:Router,){
   
  }
  ngOnInit(): void {
    this.getAllCards();
   
  }
  getAllCards(){
    this.cardService.getAllCards()
    
    .subscribe(
      response =>{
        
        console.log(response);
        this.cards=response;
      
        
      }
   
    )
  }
//   OnSubmit(){
//     console.log(this.card);
//     if(this.card.id ===''){
//       this.cardService.Post(this.card)
//       .subscribe(
//         response=>{
//           this.getAllCards();
//           this.card= {
//             id: '',
//             villainName: '',
//             franchise:'',
//             powers:'',
//             imageURL: ''
//           };
//         }
//       );
//     }
//     else {
//       this.updateCard(this.card);
//     }

    
// //  console.log(this.card);
//   }
  deleteCard(id: string){
    
    this.cardService.deleteCard(id)
    .subscribe(
      response=>{
        this.getAllCards();
      }
    )

  }
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

  logOut(){
    this.auth.signOut();
  }
}
