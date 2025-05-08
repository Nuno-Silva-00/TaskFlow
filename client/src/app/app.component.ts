import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StockComponent } from './stock/stock.component';
import { SettingsComponent } from './settings/settings.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from "./board/cards/card/card.component";
import { CardsComponent } from "./board/cards/cards.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BoardComponent,
    AuthComponent,
    NavbarComponent,
    StockComponent,
    SettingsComponent,
    CardComponent,
    CardsComponent,
    PathNotFoundComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TaskManagement';
}
