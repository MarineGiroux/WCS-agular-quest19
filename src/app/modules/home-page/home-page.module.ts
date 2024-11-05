import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule} from './home-page-routing.module';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
