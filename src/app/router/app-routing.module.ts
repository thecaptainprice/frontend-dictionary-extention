import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../core/auth/components/login/login.component';
import { RegisterComponent } from '../core/auth/components/register/register.component';
import { ResetPasswordComponent } from '../core/auth/components/reset-password/reset-password.component';
import { VerifyEmailComponent } from '../core/auth/components/verify-email/verify-email.component';
import { AddWordComponent } from '../core/pages/add-word/add-word.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterComponent },
  { path: 'add-word', component: AddWordComponent },
  { path: 'forgot-password', component: ResetPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
