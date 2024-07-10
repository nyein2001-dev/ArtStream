import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component';

import { LoginComponent } from './layouts/auth/login/login.component';
import { RegisterComponent } from './layouts/auth/register/register.component';

export const routes: Routes = [
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
