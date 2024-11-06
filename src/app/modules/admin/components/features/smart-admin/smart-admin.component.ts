import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../shared/user.service';
import { User } from '../../../../../models/classes/user.class';

@Component({
  selector: 'app-smart-admin',
  templateUrl: './smart-admin.component.html',
  styleUrl: './smart-admin.component.scss'
})
export class SmartAdminComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => console.error('Error loading users:', error)
    });
  }

}
