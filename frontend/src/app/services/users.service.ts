import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  userList() {
    return this.http.get<UserModel[]>("http://localhost:8080/api/v1/usersList");
  }
}
