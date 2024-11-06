import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/classes/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
  private http = inject(HttpClient);

  constructor() {
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>("/users.json");
  }

  getUsers(): User[] {
    this.getUser().subscribe(users => this.users = users);
    return this.users;
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User[]>("/users.json").pipe(
      map(users => users.find(user => user.id === id)),
      map(user => {
        if (!user) throw new Error('User not found');
        return user;
      })
    );
  }
}