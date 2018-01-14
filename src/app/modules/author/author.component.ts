import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  // styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  @ViewChild('authorModal') authorModal: ModalDirective;
  title = "Add Author";
  button = "Save"
  constructor() {
  }
  openModel(Author) {
    this.authorModal.show();
    if (Author) {
      this.title = "Update Author";
      this.button = "Update";
    } else {
      this.title = "Add Author";
      this.button = "Save";
    }
  }

  ngOnInit() {
  }
}
