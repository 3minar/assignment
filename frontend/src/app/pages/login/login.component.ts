import {Component} from '@angular/core';
import {UserLoginModel} from "../../models/UserLoginModel";
import {LoginService} from "../../services/login.service";
import {Message} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userInfo: UserLoginModel = {username: '', password: ''};
  messages: Message[] = [];

  constructor(private _loginService: LoginService, private authService: AuthService, private _router: Router) {
  }

  login() {
    if (this.userInfo.username && this.userInfo.password) {
      this._loginService.login(this.userInfo).subscribe(
        () => {
          this.messages = [
            {detail: "Username and password are correct", severity: "info"}
          ]
          this.authService.login();
          this._router.navigate(['/users']);
        },
        () => {
          this.messages = [
            {detail: "given info are not correct", severity: "error"}
          ]
        }
      );
    }
  }
}
