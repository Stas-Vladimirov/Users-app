import { Component, Input, OnInit } from '@angular/core';
import { ITodos } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.scss']
})
export class UserTodosComponent implements OnInit {

  @Input()
  todo!: ITodos;

  constructor() { }

  ngOnInit(): void {
  }

}
