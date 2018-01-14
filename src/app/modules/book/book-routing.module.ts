import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from 'app/modules/book/book.component';

const routes: Routes = [{
  path: '',
  component: BookComponent,
  data: {
    title: 'Book'
  }
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
