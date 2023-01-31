import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    this.signUpForm.reset();
  }
  @Output()userOut = new EventEmitter();
  signUpForm= new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl('')
  })
  addUser() {
    this.userOut.emit(this.signUpForm.value);
  }


}
