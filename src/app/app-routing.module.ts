import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGurdService, LoginAuthGurdService } from './services/auth-gurd.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginAuthGurdService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGurdService]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
