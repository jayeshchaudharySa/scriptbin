import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword.component';

const routes: Routes = [
  {  path: '', component: ForgotpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ForgotpasswordRoutingModule { }
