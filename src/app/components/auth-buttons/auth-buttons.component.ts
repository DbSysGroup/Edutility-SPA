import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.scss']
})
export class AuthButtonsComponent implements OnInit {

  constructor(private login: LoginComponent, private signup: SignupComponent) { }

  ngOnInit() {
  }

  loginDialog() {
    this.login.openDialog();
  }
  
  signupDialog() {
    this.signup.openDialog();
  }
}
