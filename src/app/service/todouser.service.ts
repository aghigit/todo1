import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodouserService {

  SERVER_URL:string = "https://todoserver1.onrender.com"

  constructor(private http:HttpClient) { }

  gettodoUser(){
    return this.http.get(`${this.SERVER_URL}/users/1`)
  }

  isLoggedIn(){
    return !!sessionStorage.getItem("todouserDetails")
  }
}
