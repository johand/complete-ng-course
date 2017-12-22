import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: Observable<any[]>;
  coursesList: AngularFireList<any>;

  course$;
  author$;

  constructor(private db: AngularFireDatabase) {
    this.coursesList = db.list('/courses');
    this.courses$ = this.coursesList.snapshotChanges()
      .map(changes => {
        console.log(changes);
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val(),
          val: c.payload.val()
        }));
      });

    // this.courses$ = this.coursesList.valueChanges();
    this.course$ = db.object('/courses/1').valueChanges();
    this.author$ = db.object('/authors/1').valueChanges();
  }

  add(course: HTMLInputElement) {
    this.coursesList.push({
      name: course.value,
      price: 150,
      isLive: true,
      sections: [
        { title: 'Components' },
        { title: 'Directives' },
        { title: 'Templates' }
      ]
    });
    course.value = '';
  }

  update(course) {
    this.db.object('/courses/' + course.key)
      .set({
        title: 'New Title',
        isLive: true
      });
  }

  delete(course) {
    this.db.object('/courses/' + course.key)
      .remove()
      .then(x => console.log(x));
  }

}
