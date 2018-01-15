import { Inject, Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'user.component.html'
})
export class UserComponent {
  @ViewChild('userModal') userModal: ModalDirective;
  @ViewChild('userDetailModal') userDetailModal: ModalDirective;  
  title = "Add User";
  button = "Save"
  constructor() {
  }
  openModel(user,event){
    event.stopPropagation();
    this.userModal.show();
    if(user){
      this.title = "Update User";
      this.button = "Update";
    } else {
      this.title = "Add User";
      this.button = "Save";
    }
  }
}
