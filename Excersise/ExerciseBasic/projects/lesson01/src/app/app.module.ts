import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent],
  imports: [BrowserModule, CourseListItemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
