import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingLoader } from "./AppRoutingLoader";

const routes: Routes = [
  { 
   path: 'auth',
   loadChildren: './auth/auth.module#AuthModule',
   data: { preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppRoutingLoader})],
  exports: [RouterModule],
  providers: [AppRoutingLoader]
})
export class AppRoutingModule { }
