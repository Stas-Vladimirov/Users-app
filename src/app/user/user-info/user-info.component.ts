import { Component, Input, OnInit } from '@angular/core';
import { IPost, ITodos, IUser } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {


  @Input()
  user!: IUser;


  posts:IPost[] =[]; 

  isShowPost!: boolean;


  todo:ITodos[]=[];

  isShowTodo!: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  getPost(){
    if(this.posts.length){
      this.isShowPost = !this.isShowPost;
      return
    }

    this.userService.getPostUserId(this.user.id).subscribe(posts => {
      this.posts = posts;
      this.isShowPost = true;
    })

  }

  getTodos(){

    if(this.todo.length){
      this.isShowTodo = !this.isShowTodo;
      return
    }
    this.userService.getUserTodos(this.user.id).subscribe(todos =>{
      this.todo = todos;
      this.isShowTodo = true;
    })
  }
 
}
