import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  }, {
    path: 'register',
    loadChildren: './modules/register/register.module#RegisterModule',
  }, {
    path: 'forgetPassword',
    loadChildren: './modules/forgetpassword/forgetpassword.module#ForgetpasswordModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
      },
      {
        path: 'book',
        loadChildren: './modules/book/book.module#BookModule'
      },
      {
        path: 'author',
        loadChildren: './modules/author/author.module#AuthorModule'
      },
      {
        path: 'profile',
        loadChildren: './modules/profile/profile.module#ProfileModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
