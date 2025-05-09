import { Component, inject } from '@angular/core';

import { KanbanService } from './kanban.service';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [HeaderComponent, CardsComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css',
})
export class KanbanComponent {
  kanbanService = inject(KanbanService);
  cards = this.kanbanService.getCards();
}
