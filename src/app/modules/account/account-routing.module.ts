import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account.component';
import { SmartUserDetailComponent } from './components/feature/smart-user-detail/smart-user-detail.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'home/user/:id', component: SmartUserDetailComponent },
  { path: 'home', component: AccountComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
