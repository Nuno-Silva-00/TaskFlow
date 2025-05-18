import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';
import { Observable } from 'rxjs';
import { AuthResponse } from '../shared/interfaces/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, LoadingSpinnerComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  router = inject(Router);
  authService = inject(AuthService);

  isLogin = signal(true);
  isLoggedIn = true;
  isloading = signal(false);
  error = signal<string | null>(null);

  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onChangeMode() {
    this.isLogin.update((prev) => !prev);
  }

  onSubmit() {
    if (!this.authForm.valid) return;
    this.isloading.set(true);
    let authObs: Observable<AuthResponse>;

    if (this.isLogin()) {
      authObs = this.authService.signIn(); // .signIn(this.authForm.value.email, this.authForm.value.password)
    } else {
      authObs = this.authService.signUp(); // .signUp(this.authForm.value.email, this.authForm.value.password)
    }

    authObs.subscribe({
      next: (data) => console.log('User created', data),
      error: (error) => {
        this.error.set('Error creating user');
        this.error.set(error); // after switch case is done in the service // review
      },
      complete: () => {
        console.log('User created successfully');
      },
    });

    this.authForm.reset();
  }
}
