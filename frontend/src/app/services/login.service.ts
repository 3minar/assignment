import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserLoginModel} from "../models/UserLoginModel";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(userInfo: UserLoginModel) {
    return this.http.post<UserLoginModel>("http://localhost:8080/api/v1/login", userInfo);
  }
}
