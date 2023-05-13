import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddresponseComponent } from './addresponse/addresponse.component';
import { ResponseboxComponent } from './addresponse/responsebox/responsebox.component';
import { ResponsepageComponent } from './addresponse/responsepage/responsepage.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MenuComponent,
    AddproductComponent,
    AddresponseComponent,
    ResponseboxComponent,
    ResponsepageComponent,
    HomeComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule    
  ]
})
export class AdminModule { }
