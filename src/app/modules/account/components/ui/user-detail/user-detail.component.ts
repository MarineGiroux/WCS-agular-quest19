import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  @Input() user!: User;
}
