import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  modalObj: any = {
    title: "Edit profile"
  }
  @ViewChild('profileModal') profileModal: ModalDirective;

  constructor() {

  }

  ngOnInit() {
  }

  openProfileModel(modal) {
    if (modal == "reset")
      this.modalObj.title = "Reset password";
    else
      this.modalObj.title = "Edit profile";
    this.profileModal.show();
  }

}
