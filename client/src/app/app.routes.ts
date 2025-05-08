import { Routes } from '@angular/router';
import { CardComponent } from './board/cards/card/card.component';
import { SettingsComponent } from './settings/settings.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: '/settings',
    component: SettingsComponent,
  },
  {
    path: '**',
    component: PathNotFoundComponent,
  },
];
