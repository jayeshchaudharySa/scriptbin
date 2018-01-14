import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ForgetpasswordRoutingModule } from './forgetpassword-routing.module';
import { ForgetpasswordComponent } from './forgetpassword.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ForgetpasswordRoutingModule
  ],
  declarations: [ForgetpasswordComponent]
})
export class ForgetpasswordModule {

}
