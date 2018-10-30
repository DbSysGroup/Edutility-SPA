import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { LoginComponent } from '../components/login/login.component';
 
@Injectable({
  providedIn: "root"
})
export class AuthService {
  private baseUrl = "http://localhost:5000/api/auth/";

  constructor(private http: HttpClient) {}

  login: LoginComponent;

  logIn(credentials: any) {
    // Observable rxJS
    return this.http.post(this.baseUrl + "login", credentials).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
        }
        this.login.closeDialog();
      })
    );
  }
}
