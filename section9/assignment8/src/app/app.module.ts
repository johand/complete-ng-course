import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseFormComponent } from './course/course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HttpModule } from '@angular/http';
import { GithubFollowersService } from './services/github-followers.service';



@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    CourseFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AuthorsService, GithubFollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
