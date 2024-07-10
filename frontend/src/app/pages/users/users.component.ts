import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/UserModel";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];
  filteredUsers: UserModel[] = [];
  searchTxt: string = "";

  constructor(private usersService: UsersService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.usersService.userList().subscribe(
      (data) => {
        this.users = data;
        this.filteredUsers = this.users;
      },
      () => {
        console.log("Cannot load users");
      }
    )
  }

  search() {
    this.filteredUsers=this.users.filter(user => user.name.toLowerCase().includes(this.searchTxt.toLowerCase()));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
