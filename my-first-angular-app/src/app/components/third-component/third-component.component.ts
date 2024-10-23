import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [],
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.css'
})
export class ThirdComponentComponent {

  opreratingSystems = [
    {id: 'wind', name: 'windows'},
    {id: 'osx', name: 'MacOs'},
    {id: 'lin', name: 'Linux'},
  ]

  users = [
    {id: '0', name: 'Sarah'},
    {id: '1', name: 'Amy'},
    {id: '2', name: 'Rachel'},
    {id: '3', name: 'Jessica'},
    {id: '4', name: 'Poornima'}
  ]

}
