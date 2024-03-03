import { Component, OnInit, afterNextRender } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UserSchema } from '../models/userSchema';
import { withNoXsrfProtection } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  implements OnInit{

  user:UserSchema={}

  constructor(private route:ActivatedRoute, private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      const {id}= res
      console.log(res);
      this.getEditdetails(id)
    })
  }

  getEditdetails(todoId:string){
    this.api.getSingletodoAPI(todoId).subscribe((res:any)=>{
      this.user= res
      console.log(this.user);
    })
  }

  cancel(todoId:any){
    this.getEditdetails(todoId)
  }

  updateTodosdetails(id:any){
    this.api.updatetodoAPI(id,this.user).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.router.navigateByUrl("home")
        alert("updated successfully")
      },
      error:(reason:any)=>{
        console.log(reason.message);
      }
    })
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("")
   }


}
