import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'User'
  },
  component: UserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule { }
