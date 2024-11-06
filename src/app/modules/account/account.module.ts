import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './pages/account.component';
import { SmartUserDetailComponent } from './components/feature/smart-user-detail/smart-user-detail.component';
import { UserDetailComponent } from './components/ui/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AccountComponent,
    SmartUserDetailComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule
  ]
})
export class AccountModule { }
