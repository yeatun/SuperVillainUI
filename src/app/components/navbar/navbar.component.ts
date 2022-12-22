import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cardService:CardsService, private auth: AuthService){
   
  }
  logOut(){
    this.auth.signOut();
  }
}
