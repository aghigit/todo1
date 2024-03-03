import { Component } from '@angular/core';
import { TodouserService } from '../service/todouser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string=""
  password:string=""

  constructor(private api:TodouserService, private router:Router){

  }

  logIn(){
    if(this.email && this.password){
      this.api.gettodoUser().subscribe({
        next:(res:any)=>{
          console.log(res);
          const {email,password} = res
          if(email==this.email && password==this.password){
            alert("login successful");
            sessionStorage.setItem("todouserDetails",JSON.stringify(res))
            this.email=""
            this.password=""
            // navigate
            this.router.navigateByUrl("/home")
          }else{
            alert("invalid email or password")
          }
        },
        error:(reason:any)=>{
          console.log(reason.message);
          
        }
      })
    }else{
      alert("please fill form completely")
    }
  }
}
