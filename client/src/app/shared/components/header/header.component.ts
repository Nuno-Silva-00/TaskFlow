import { NgClass } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = inject(Router);
  authService = inject(AuthService);

  isDropdownOpen = signal(false);

  toggleDropdown() {
    this.isDropdownOpen.update((prev) => !prev);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickInside = target.closest('.relative');
    if (!clickInside) {
      this.isDropdownOpen.set(false);
    }
  }

  logout() {
    this.authService.logOut();
    this.isDropdownOpen.set(false);
  }
}
