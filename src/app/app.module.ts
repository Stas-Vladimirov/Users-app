import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Пункт 5 */
import { HttpClientModule } from '@angular/common/http';
import { UserItemComponent } from './user/user-item/user-item.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserPostComponent } from './user/user-post/user-post.component';
import { UserPostCommentComponent } from './user/user-post-comment/user-post-comment.component';
import { UserTodosComponent } from './user/user-todos/user-todos.component';
@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserInfoComponent,
    UserPostComponent,
    UserPostCommentComponent,
    UserTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* Пункт 5 */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
