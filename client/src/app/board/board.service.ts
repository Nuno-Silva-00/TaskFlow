import { Injectable, signal } from '@angular/core';
import { Card } from '../shared/interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  cards = signal<Card[]>([]);

  constructor() {
    this.cards.set([
      {
        id: 1,
        title: 'Task 1',
        description: 'Description of Task 1',
        createDate: new Date('2023-10-01'),
        endDate: new Date('2023-10-05'),
        priority: 'High',
        status: 'In Progress',
        assignedTo: 'User 1',
        lastUpdated: new Date('2023-10-01'),
        materialsUsed: [
          { name: 'Material 1', quantity: 10, unit: 'kg' },
          { name: 'Material 2', quantity: 5, unit: 'm' },
        ],
        hoursSpent: 5,
        comments: [
          {
            comment: 'Comment 1',
            date: new Date('2023-10-02'),
            userId: 'User 2',
          },
          {
            comment: 'Comment 2',
            date: new Date('2023-10-03'),
            userId: 'User 3',
          },
        ],
      },
    ]);
  }

  getCards() {
    return this.cards.asReadonly();
  }

  addCard(card: Card) {
    this.cards.update((currentCards) => [...currentCards, card]);
  }

  // updateCard()

  deleteCard(cardId: number) {
    this.cards.update((currentCards) =>
      currentCards.filter((card) => card.id !== cardId)
    );
  }
}
