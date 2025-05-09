import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  config = [
    {
      name: 'Board',
      path: '/board',
      img: 'assets/kanban.svg',
      imgAlt: 'Board icon',
    },
    {
      name: 'Inventory',
      path: '/inventory',
      img: 'assets/inventory.svg',
      imgAlt: 'Inventory icon',
    },
    {
      name: 'Settings',
      path: '/settings',
      img: 'assets/settings.svg',
      imgAlt: 'Settings icon',
    },
    {
      name: 'Admin Panel',
      path: '/admin',
      img: 'assets/admin.svg',
      imgAlt: 'Admin icon',
    },
  ];
}
