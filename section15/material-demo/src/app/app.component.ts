import { Component } from '@angular/core';
// import { clearInterval } from 'timers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // progress = 0;
  // timer;
  isLoading = false;

  constructor() {
    // this.timer = setInterval(() => {
    //   this.progress++;

    //   if (this.progress === 100) { clearInterval(this.timer); }
    // }, 20);

    this.isLoading = true;

    this.getCourses()
      .subscribe(x => this.isLoading = false);
  }

  getCourses() {
    return Observable.timer(2000);
  }

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

  // minDate = new Date(2017, 12, 1);
  // maxDate = new Date(2018, 1, 6);

  // categories = [
  //   { name: 'Begginer' },
  //   { name: 'Intermediate' },
  //   { name: 'Advanced' },
  // ];

  // selectCategory(category) {
  //   this.categories
  //     .filter(c => c !== category)
  //     .forEach(c => c['selected'] = false);

  //   category.selected = !category.selected;
  // }
}
