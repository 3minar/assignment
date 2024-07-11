import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/UserModel";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {PaginatorState} from "primeng/paginator";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];
  filteredUsers: UserModel[] = [];
  searchTxt: string = "";
  first: number = 0;
  rows: number = 3;
  totalRecords: number = 0;

  constructor(private usersService: UsersService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.usersService.userList().subscribe(
      (data) => {
        this.users = data;
        this.filteredUsers = this.users;
        this.totalRecords = this.users.length;
        this.updatePaginatedUsers();
      },
      () => {
        console.log("Cannot load users");
      }
    )
  }

  search() {
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(this.searchTxt.toLowerCase()));
    this.totalRecords = this.filteredUsers.length;
    this.first = 0; // Reset to the first page when searching
    this.updatePaginatedUsers();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first!;
    this.rows = event.rows!;
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers() {
    const startIndex = this.first;
    const endIndex = this.first + this.rows;
    this.filteredUsers = this.users.slice(startIndex, endIndex);
  }
}
