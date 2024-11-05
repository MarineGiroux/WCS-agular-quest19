import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule) },
	{ path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) },
	{ path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
