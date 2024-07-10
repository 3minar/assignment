import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(user: UserModel) {
    return this.http.post<any>("http://localhost:8080/api/v1/adduser", user);
  }
}
