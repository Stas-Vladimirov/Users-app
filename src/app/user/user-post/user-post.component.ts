import { Component, Input, OnInit } from '@angular/core';
import { IComments, IPost } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  /* Пункт 18.7
     Говорим что post прийдёт сверху
  */

  @Input()
  post!: IPost;

  /* Пункт 19.4 */
  comment: IComments[] = []/* (****) */
  /* 
     Пункт 19.5
     Переходим в файл user-post.component.html
  */

  /*
     Пункт 19.10
  */
  isShowComment!: boolean;

  /* 
    Пункт 19.11
    Переходим в файл user-post.component.html
  */

  constructor(private userService: UserService) { }
  /*
    Пункт 19.3

    Класс UserService, который находится
    в файле user.service.ts нужно заимпортировать.

    Для того, чтобы найти класс UserService
    наводим мышкой на нахвание класса и
    жмём на Quick fix...
  */

  ngOnInit(): void {
  }

  getComments(){

    /* 
      Пункт 19.8

      Если объект this.comment (****)
      емемет размер

      Пункт 19.9
      В методе getComments создадим
      объект this.isShowComment

    
    */
    if(this.comment.length){
      this.isShowComment = !this.isShowComment;
      return

    }

    this.userService.getCommentsByPostId(this.post.id).subscribe(comments =>{
      this.comment = comments;

      /* Пункт 19.9 */
      
      this.isShowComment = true;

      /*
      Пункт 19.10
      В user-post.component.ts создадим
      объект isShowComment (****)
      */
  
    })

  }
  /*
  getCommentsByPostId() - имя сервера,который
  мы создали в service
  */
  /*
    Сейчас мы должны сделать запрос.

    Для того, чтобы сделать запрос мы должны получить
    сервис, который мы создали в файле user.service.ts

    В constructor мы должны получить класс где
    мы описывали сервис.

    После двоеточия пишем название класса, который мы
    хотим получить.

    Для того, чтобы получить данные мы
    подписываемся subscribe
    Как только мы подписались наш запрос пройдёт.
    Когда запрос пройдёт мы получим комменты (comments)

    Создадим объект this.comment (****)
  */

  /*
    Пункт 19.4
    В user-post.component.ts создадим поле comment (****)
  */

}
