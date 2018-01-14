import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  // styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @ViewChild('bookModal') bookModal: ModalDirective;
  title = "Add Book";
  button = "Save"
  constructor() {
  }
  openModel(Book) {
    this.bookModal.show();
    if (Book) {
      this.title = "Update Book";
      this.button = "Update";
    } else {
      this.title = "Add Author";
      this.button = "Save";
    }
  }

  ngOnInit() {
  }
}
