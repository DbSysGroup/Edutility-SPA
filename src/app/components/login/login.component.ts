import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog, private auth: AuthService) { }

  loginForm: FormGroup

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(email_regex)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  get email(): string {
    return this.loginForm.get('email').value;
  }
  get password(): string {
    return this.loginForm.get('password').value;
  }

  logIn() {
    const creds = {
      email: this.email,
      password: this.password
    }
    console.log(creds.email, creds.password);
    this.auth.logIn(creds);
  }

  openDialog() { 
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "450px";
    dialogConfig.height = "600px";
    this.dialog.open(LoginComponent, dialogConfig);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
