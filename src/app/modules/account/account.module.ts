import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './pages/account.component';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule
  ]
})
export class AccountModule { }
