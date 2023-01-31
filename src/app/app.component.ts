import { Component } from '@angular/core';
import { SignUp } from './sign-up';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BreadBasket';
  isAddUser = false;

  addUser(user: SignUp) {
    this.isAddUser = false;
  }

  addNewUser(user: SignUp ){
    this.isAddUser = true;

  }
}
