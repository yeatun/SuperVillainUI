import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  card: Card ={
    id: '',
    villainName: '',
    franchise:'',
    powers:'',
    imageURL: ''
  }
constructor(private route: ActivatedRoute,private cardService:CardsService,private router:Router){}

ngOnInit(): void{
  this.route.paramMap.subscribe({
    next: (params) =>{
      const id = params.get('id');

      if(id){
        this.cardService.getcards(id)
        .subscribe({
          next: (response)=>{
            this.card =response
          }
        })
      }
    }
  })
}
updateCard(){
this.cardService.updateCard(this.card.id,this.card)
.subscribe({
  next: (response)=>{
    this.router.navigate(['dashboard']);
  }
})
}
// deleteCard(id:string){
// this.cardService.deleteCard(id)
// .subscribe({
//   next: (response)=>{
// this.router.navigate(['dashboard'])
//   }
// })
// }
}
