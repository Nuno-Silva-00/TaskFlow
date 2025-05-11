import { NgClass } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = inject(Router);
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickInside = target.closest('.relative');
    if (!clickInside) {
      this.isDropdownOpen = false;
    }
  }

  logout() {
    // Implement your logout logic here
    console.log('Logout clicked');
    this.router.navigate(['/auth']);
    this.isDropdownOpen = false;
  }
}
