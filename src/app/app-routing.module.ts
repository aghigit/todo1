import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { guardGuard } from './guard-folder/guard.guard';
import { HomeComponent } from './modules/home/home.component';
import { AddComponent } from './modules/home/add/add.component';



const routes: Routes = [
  { path: 'home', canActivate:[guardGuard], loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {
    path:"",component:LoginComponent
  },
  {
    path:"home/add",component:AddComponent,canActivate:[guardGuard]
  },
  {
    path:"**",redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
