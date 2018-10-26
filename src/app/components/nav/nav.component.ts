import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  heroForm: FormGroup;

  ngOnInit() {
    this.heroForm = new FormGroup({
      username: new FormControl("", []),
      password: new FormControl("", [])
    });
  }

  get username(): string {
    return this.heroForm.get("username").value;
  }
  get password(): string {
    return this.heroForm.get("password").value;
  }

  login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    // always need to subscribe to observables
    this.authService.login(credentials).subscribe(
      next => {
        console.log("logged in successfully");
      },
      error => {
        console.error("failed to login");
      }
    );
  }
}
