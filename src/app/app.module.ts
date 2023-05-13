import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UserRoutingModule } from './user/user-routing.module';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
