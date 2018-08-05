import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card'
})
export class CardComponent {
  @Input() title: string = '';
}
