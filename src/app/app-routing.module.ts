import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './user/home/details/details.component';
import { DietDetailsComponent } from './user/dietplan/dietdetails/dietdetails.component';
import { ForumComponent } from './user/forum/forum.component';
import { ForumresponseComponent } from './user/forum/forumresponse/forumresponse.component';
import { CreateComponent } from './user/create/create.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"dietdetails/:id",component:DietDetailsComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"forum/:id",component:ForumComponent},
  {path:"post/:id",component:ForumresponseComponent},
  {path:"create/:id",component:CreateComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
