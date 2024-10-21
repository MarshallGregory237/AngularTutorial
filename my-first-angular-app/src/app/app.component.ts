import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    FirstComponentComponent,
    UserComponentComponent,
    SecondComponentComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  isServerRunning = true;
}
