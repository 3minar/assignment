import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInKey = 'isLoggedIn';

  constructor() { }

  // Simulate login and save to localStorage
  login() {
    localStorage.setItem(this.loggedInKey, 'true');
  }

  // Simulate logout and remove from localStorage
  logout() {
    localStorage.removeItem(this.loggedInKey);
  }

  // Check if user is logged in by checking localStorage
  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInKey) === 'true';
  }
}
