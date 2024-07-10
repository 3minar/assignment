import {Component} from '@angular/core';
import {Message} from "primeng/api";
import {UserModel} from "../../models/UserModel";
import {UserGender} from "../../models/UserGender";
import {Router} from "@angular/router";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  messages: Message[] = [];
  user: UserModel = {name: "", password: "", age: 10, address: "", gender: UserGender.male, username: ""};

  constructor(private _router: Router, private _registerService: RegisterService) {
  }

  register() {
    if (this.user.name && this.user.username && this.user.password) {
      this._registerService.register(this.user).subscribe(
        () => {
          this.messages = [
            {detail: "New user has been created", severity: "info"}
          ]
          this.user.name = "";
          this.user.password = "";
          this.user.username = "";
          this.user.address = "";
          this.user.age = 10;
          this.user.gender = UserGender.male;
        },
        () => {
          this.messages = [
            {detail: "given info are not correct", severity: "error"}
          ]
        }
      );
    } else {
      this.messages = [
        {detail: "given info are not correct", severity: "error"}
      ]
    }
  }
}
