import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CoreModule } from '../core.module';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [CommonModule, CoreModule, ReactiveFormsModule],
  exports: [LoginComponent, RegisterComponent, ResetPasswordComponent],
})
export class AuthModule {}
