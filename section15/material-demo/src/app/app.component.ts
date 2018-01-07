import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // isChecked = true;

  // onChange($event) {
  //   console.log($event);
  // }

  // colors = [
  //   { id: 1, name: 'Red'},
  //   { id: 2, name: 'Green'},
  //   { id: 3, name: 'Blue'}
  // ];

  // color = 2;

  minDate = new Date(2017, 12, 1);
  maxDate = new Date(2018, 1, 6);
}
