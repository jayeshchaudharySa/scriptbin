import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import { ForgotpasswordComponent } from './forgotpassword.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ForgotpasswordRoutingModule
  ],
  declarations: [ForgotpasswordComponent]
})
export class ForgotpasswordModule {

}
