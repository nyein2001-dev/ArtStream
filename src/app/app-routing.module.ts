import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component';

import { LoginComponent } from './layouts/auth/login/login.component';
import { RegisterComponent } from './layouts/auth/register/register.component';

import { BoardComponent } from './layouts/board/board.component';
import { HomeComponent } from './layouts/board/home/home.component';

export const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
