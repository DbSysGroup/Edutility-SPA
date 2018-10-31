import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private dialog: MatDialog, private auth: AuthService) { }

  signupForm: FormGroup

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(email_regex)
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      school: new FormControl(''),
      dob: new FormControl('')
    });
  }

  get username(): string {
    return this.signupForm.get('username').value;
  }
  get email(): string {
    return this.signupForm.get('email').value;
  }
  get password(): string {
    return this.signupForm.get('password').value;
  }
  get school(): string {
    return this.signupForm.get('school').value;
  }
  get dob(): Date {
    return this.signupForm.get('dob').value;
  }

  logIn() {
    const creds = {
      email: this.email,
      password: this.password
    }
    console.log(creds.email, creds.password);
    this.auth.signUp(creds);
  }

  openDialog() { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "600px";
    this.dialog.open(SignupComponent, dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
