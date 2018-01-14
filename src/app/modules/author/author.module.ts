import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
    ModalModule 
  ],
  declarations: [AuthorComponent]
})
export class AuthorModule { }
