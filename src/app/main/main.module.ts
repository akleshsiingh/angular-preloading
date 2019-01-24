import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './landing/home.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    NavBarComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
})
export class MainModule { }
