import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  router = inject(Router);
  isLoggedIn = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/dashboard/board']);
    }, 1000);
  }
}
