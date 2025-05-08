import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  boardService = inject(BoardService);
  cards = this.boardService.getCards();
}
