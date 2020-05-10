import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
{ path: 'login',  component: LoginComponent},
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'signup',  component: CreateAccountComponent},
{ path: 'profile', component: UserProfileComponent},
{ path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }