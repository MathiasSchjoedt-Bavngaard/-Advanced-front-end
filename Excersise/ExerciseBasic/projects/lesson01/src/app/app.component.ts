import { Component } from '@angular/core';
import { Course, CourseCode } from 'models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lesson 01';
  coursesFromApp: Course[] = [
    {
      name: 'Advanced Frontend',
      code: CourseCode.AFE,
      etcs: 5,
    },
    {
      name: 'Advanced Funktionele Programmering',
      code: CourseCode.AFP,
      etcs: 10,
    },
  ];
}
