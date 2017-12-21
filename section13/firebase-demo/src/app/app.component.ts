import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  courses: any[];
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.subscription = db.list('/courses')
      .valueChanges()
      .subscribe(courses => {
        this.courses = courses;
        console.log(courses);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
