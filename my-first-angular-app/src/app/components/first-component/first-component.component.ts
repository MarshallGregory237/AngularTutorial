import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  template: ' Hello Universe. we are in {{ city }}, {{ 1 + 1}} ',
  styles: ' :host { color: #a144eb; } '
})


export class FirstComponentComponent {
  city = " San Francisco";
}
