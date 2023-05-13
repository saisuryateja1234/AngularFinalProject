import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddresponseComponent } from './addresponse/addresponse.component';
import { ResponsepageComponent } from './addresponse/responsepage/responsepage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: MenuComponent,
    children: [
      { path: "Addproduct", component: AddproductComponent },
      { path: "Addresponses", component: AddresponseComponent },

      {path:"Home",component:HomeComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
