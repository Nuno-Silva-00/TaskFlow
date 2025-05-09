import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './cards/card/card.component';

import { KanbanService } from './kanban.service';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './kanban.component.html',
  styleUrl: './kanban.component.css',
})
export class KanbanComponent {
  kanbanService = inject(KanbanService);
  cards = this.kanbanService.getCards();
}
