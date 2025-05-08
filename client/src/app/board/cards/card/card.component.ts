import { Component, input } from '@angular/core';
import { Card } from '../../shared/interfaces/card';
import { DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // card = input.required<Card>();
}
