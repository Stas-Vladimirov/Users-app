import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  /* Пункт 12 
     говорим что user прийдёт сверху
  
  */
  @Input()
  user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
