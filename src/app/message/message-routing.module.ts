import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsgLandingComponent } from './msg-landing/msg-landing.component';

const routes: Routes = [
  { path:'', component: MsgLandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
