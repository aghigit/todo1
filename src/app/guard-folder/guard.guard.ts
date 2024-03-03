import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TodouserService } from '../service/todouser.service';

export const guardGuard: CanActivateFn = () => {
  const authStatus=inject(TodouserService)

  const router = inject(Router)

  if(authStatus.isLoggedIn()){
    return true
  }else{
    alert("please loggin")
    router.navigateByUrl("")
    return false
  }
};
