import { Component } from '@angular/core';
import { UserSchema } from '../models/userSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  user:UserSchema = {}

  constructor(private api:ApiService, private router:Router){}

  cancelTask(){
    this.user.taskDate=""
    this.user.taskTitle=""
    this.user.taskDetails=""
  }
  addTask(){
    this.api.addTodoAPI(this.user).subscribe({
      next:(res:any)=>{
        alert("task added..")
        this.router.navigateByUrl("home")
       this.cancelTask()
      },
      error:(reason:any)=>{
        console.log(reason);
      }
    })
  }
}
