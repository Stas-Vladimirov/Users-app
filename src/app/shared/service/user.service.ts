import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IComments, IPost, ITodos, IUser } from '../model/user.model';

const URL_PREFIX = 'https://jsonplaceholder.typicode.com';

const users = [
  {
    id: 1,
    name:"Bob",
    surname: "Black",
    email: "bob@gmail.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Edinburgh",
      zipcode:"92998-38",
      geo: {
        lat: "-37",
        lng: "81"
      }
    },
    phone: "121-74-21",
    website: "bob.com",
    company:{
      name: "NNP",
      cathPhrase: "Multi",
      bs: "harnesss real-time"
    }
  },
  {
    id: 2,
    name:"Max",
    surnamee: "White",
    emale: "bob@gmail.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Edinburgh",
      zipcode:"92998-38",
      geo: {
        lat: "-37",
        lng: "81"
      }
    },
    phone: "121-74-21",
    website: "bob.com",
    company:{
      name: "NNP",
      cathPhrase: "Multi",
      bs: "harnesss real-time"
    }
  }

]

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(`${URL_PREFIX}/users`);

  }

  getUserById(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(`${URL_PREFIX}/users/${id}`);
  }
  

  getPostUserId(id: number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${URL_PREFIX}/users/${id}/posts`);
  }
 
  getCommentsByPostId(id: number): Observable<IComments[]>{
    return this.httpClient.get<IComments[]>(`${URL_PREFIX}/posts/${id}/comments`);
  }
  
  getUserTodos(id: number): Observable<ITodos[]>{
    return this.httpClient.get<ITodos[]>(`${URL_PREFIX}/users/${id}/todos`)
  }

    
  

}
