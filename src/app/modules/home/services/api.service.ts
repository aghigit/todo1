import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchema } from '../models/userSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL = "https://todoserver1.onrender.com"

  constructor(private http:HttpClient) { }

  addTodoAPI(user:UserSchema){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }

  getTodoAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)
  }

  getSingletodoAPI(id:string){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)
  }

  updatetodoAPI(todoId:string,allTodos:UserSchema){
    return this.http.put(`${this.SERVER_URL}/users/${todoId}`,allTodos)
  }

  removeTodoAPI(todoId:string){
    return this.http.delete(`${this.SERVER_URL}/users/${todoId}`)
  }
}
