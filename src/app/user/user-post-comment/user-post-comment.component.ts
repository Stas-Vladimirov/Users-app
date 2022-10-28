import { Component, Input, OnInit } from '@angular/core';
import { IComments } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-post-comment',
  templateUrl: './user-post-comment.component.html',
  styleUrls: ['./user-post-comment.component.scss']
})
export class UserPostCommentComponent implements OnInit {
  /* Пункт 19.7
     Говорим что post прийдёт сверху
  */
  @Input()
  comment!: IComments;

  constructor() { }

  ngOnInit(): void {
  }

}
