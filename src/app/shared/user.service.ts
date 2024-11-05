import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
  private http = inject(HttpClient);

  constructor() {
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>("./../public/json/user.json");
  }

  getUsers(): User[] {
    this.getUser().subscribe(users => this.users = users);
    return this.users;
  }
}