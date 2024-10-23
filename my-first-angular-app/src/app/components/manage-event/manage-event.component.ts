import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { delay, timeInterval } from 'rxjs';

@Component({
  selector: 'app-manage-event',
  standalone: true,
  imports: [],
  templateUrl: './manage-event.component.html',
  styleUrl: './manage-event.component.css'
})

export class ManageEventComponent {

  message ='';

  greet(){
    console.log('Hello world there');
  }

  onMosueOver(){
    this.message ='Way to go';

    setTimeout(() => {
      this.message ='';
    }, 8000);
  }

  onMouseOut(){
    this.message ='';
  }

}
