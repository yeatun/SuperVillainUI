import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { AuthService } from 'src/app/service/auth.service';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  card: Card ={
    id: '',
    villainName: '',
    franchise:'',
    powers:'',
    imageURL: ''
  }
  
  constructor(private fb: FormBuilder,private cardService:CardsService, private auth: AuthService,private router:Router){
   
  }
  logOut(){
    this.auth.signOut();
  }
  OnSubmit(){
    
    // if(this.card.id ===''){
      this.cardService.Post(this.card)
      .subscribe(
        response=>{
          this.router.navigate(['dashboard']);
          console.log(this.card);
          // this.getAllCards();
          // this.card= {
          //   id: '',
          //   villainName: '',
          //   franchise:'',
          //   powers:'',
          //   imageURL: ''
          // };
        }
      );
    // }
    // else {
    //   this.updateCard(this.card);
    // }

    
//  console.log(this.card);
  }
}
