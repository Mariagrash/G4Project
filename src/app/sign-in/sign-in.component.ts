import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  ngOnInit() {
    this.signInForm.reset();
  }
  @Output()userOut = new EventEmitter();
  signInForm= new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl('')
  })
  addUser() {
    this.userOut.emit(this.signInForm.value);
  }


}
