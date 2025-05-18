import { Routes } from '@angular/router';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { KanbanComponent } from './dashboard/kanban/kanban.component';
import { StockComponent } from './dashboard/stock/stock.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canMatch: [authGuard],
    children: [
      { path: '', redirectTo: 'board', pathMatch: 'full' },
      {
        path: 'board',
        component: KanbanComponent,
      },
      {
        path: 'inventory',
        component: StockComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
