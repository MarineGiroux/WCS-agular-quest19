import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin.component';
import { SmartAdminComponent } from './components/features/smart-admin/smart-admin.component';
import { ListAdminComponent } from './components/ui/list-admin/list-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    SmartAdminComponent,
    ListAdminComponent
],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
