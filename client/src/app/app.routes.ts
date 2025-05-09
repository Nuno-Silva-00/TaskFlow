import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { KanbanComponent } from './kanban/kanban.component';
import { StockComponent } from './stock/stock.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full',
  },
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
    component: SettingsComponent,
  },
  {
    path: '**',
    redirectTo: 'board',
  },
];
