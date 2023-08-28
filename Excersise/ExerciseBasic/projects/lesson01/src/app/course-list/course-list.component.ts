import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseListItemComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {}
