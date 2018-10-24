import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private baseUrl = "http://localhost:5000/api/auth/";

  constructor(private http: HttpClient) {}

  login(username: any, password: any) {
    // Observable rxJS
    return this.http.post(this.baseUrl + "login", username, password).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
        }
      })
    );
  }
}