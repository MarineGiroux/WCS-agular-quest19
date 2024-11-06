import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user.class';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrl: './list-admin.component.scss'
})
export class ListAdminComponent {
  @Input() users: User[] = [];
}
