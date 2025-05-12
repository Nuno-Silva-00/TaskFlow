import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  router = inject(Router);
  isLogin = signal(true);
  isLoggedIn = true;
  authForm: FormGroup = new FormGroup({
    email: new FormControl('teste'),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.getItem('isLoggedIn');

    // this.router.navigate(['/dashboard/board']);
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
  }
}
