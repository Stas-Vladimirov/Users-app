import { Component, OnInit } from '@angular/core';
import { IUser } from './shared/model/user.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /* Пункт 8.1
     Это будет обект any, который
     будет являтся массивом
  */

  /* Пункт 8.2
     Теперь мы должны узнать какие поля
     будут у users
     Для того, чтобы узнать мы
     должны 
     1. запустить проект.
     2. Нажимаем F12
     3. Нажимаем на Network Пощёл запрос на users
     
  */
  users: IUser[] = []; /* (****) */

  /* 
    Пункт 8
    implements означает что класс AppComponent должен
    применить метод OnInit

    ngOnInit – вызывается один раз на протяжении
    жизненного цикла компонента после первой
    установки свойств и выполняет инициализацию компонента

    мы хотим получить метод getUsers(), который мы создали в папке service
  */

  /* 
    Пункт 13.3

    Пункт 18.10
     У selectedUser может быть тип IUser или null
  */
     selectedUser!: IUser | null; /* (****) */
   /* 
     Пункт 13.4
     Переходим в файл app.component.html
   */
     


  constructor(private userService: UserService){
    /*
    Класс UserService, который находится в файле
    user.service.ts нужно заимпортировать.

    Для того, чтобы найти класс UserService
    наводим мышкой на нахвание класса и
    жмём на Quick fix...
    */

  }
  ngOnInit() {
    this.getUsers();
  }
  /* Описываем метод getUsers */
  private getUsers(){
    this.userService.getUsers().subscribe(users =>{
      this.users = users;
      /*
        Пункт 9 
        Вызовем пользователей (users), которых мы
        создали user.service.ts
      */
     console.log(users)

    })
    /*Сейчас мы должны сделать запрос.

      Для того, чтобы сделать запрос мы должны получить
      сервис, который мы создали в файле user.service.ts

      В constructor мы должны получить класс где
      мы описывали сервис.

      После двоеточия пишем название класса, который мы
      хотим получить.

       Для того, чтобы получить данные мы
      подписываемся subscribe
       Как только мы подписались наш запрос пройдёт
       Когда запрос пройдёт мы получим пользователей (users)

       Создадим объект this.users (****)

       getUsers() - имя сервера,который
       мы создали в service
    */

    /*
      Пункт 8.1
      В app.component.ts создадим поле users
    
    */
  }
  /*Пункт 13.2 
    передаём id типом number
  */
  public getUserById(id: number){


    /* Пункт 18.9 */

    /* 
       Пункт 18.10
       Сверху файла app.component.ts
    
    */

    this.selectedUser = null;
    
    this.userService.getUserById(id).subscribe(user =>{
      this.selectedUser = user;
      /*
       getUserById(id) - имя сервера,который
       мы создали в service

       Создадим объект this.selectedUser  (****) 
      */
      /*
       Пункт 13.3
       В app.component.ts создадим поле selectedUser
      */
    })
  }
}

