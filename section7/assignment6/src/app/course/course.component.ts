import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseFormComponent implements OnInit {
  submit(course) {
    console.log(course);
  }

  log(cn) {
    console.log(cn);
  }

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
