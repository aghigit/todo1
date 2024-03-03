import { Component, OnInit } from '@angular/core';
import { UserSchema } from '../models/userSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  implements OnInit {

  allTodos:UserSchema[]=[]


  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.getAllTodos() 
  }

  getAllTodos(){
    this.api.getTodoAPI().subscribe({
      next:(result:any)=>{     
          this.allTodos=result
        console.log(this.allTodos);
      },
      error:(reason:any)=>{
        console.log(reason);   
      }
    })
  }
   deleteTodo(id:any){
    this.api.removeTodoAPI(id).subscribe(
      (res:any)=>{
        alert("deleted...")
        this.getAllTodos()
      }
    )
   }

   logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
   }
}
