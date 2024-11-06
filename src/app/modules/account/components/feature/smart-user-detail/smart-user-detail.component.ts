import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../shared/user.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-smart-user-detail',
  templateUrl: './smart-user-detail.component.html',
  styleUrl: './smart-user-detail.component.scss'
})
export class SmartUserDetailComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.userService.getUserById(+params['id']))
    ).subscribe({
      next: (user) => {
        this.user = user;
        console.log('User loaded:', user);
      },
      error: (error) => console.error('Error loading user:', error)
    });
  }
}
