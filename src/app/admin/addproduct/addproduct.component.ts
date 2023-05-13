import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
   id:any;




    name:any;
  
   
  
    type:any;
  
   
  
    price:any;
  
   
  
    image:any;
  
   
  
    description:any;
  
   
  
    quantity:any;
  
   
  
    errors:string[]=[];
  
   
  
    constructor(private hs:ProductService) { }
  
   
  
    submit(){
  
   
  
    this.errors = []
  
   
  
     if(this.name==undefined || this.name.length<3)
  
   
  
    this.errors.push("Name should be greater than 3 characters")
  
   
  
    if(this.type==undefined )
  
   
  
    this.errors.push("type is required")
  
   
  
    if(this.price==undefined )
  
   
  
    this.errors.push("Price is required")
  
   
  
    if(this.image==undefined )
  
   
  
    this.errors.push("image is required")
  
   
  
    if(this.description==undefined)
  
   
  
    this.errors.push("First name should be greater than 3 characters")
  
   
  
    if(this.quantity==undefined)
  
   
  
    this.errors.push("atleast 1 character")
  
   
  
    if(this.errors.length==0){
  
   
  
    let obj={
  
   
  
    id:Math.round(Math.random()*100000),
  
   
  
    name:this.name,
  
   
  
    type:this.type,
  
   
  
    price:this.price,
  
   
  
    image:this.image,
  
   
  
    description:this.description,
  
   
  
    quantity:this.quantity
  
   
  
    }
  
   
  
    this.hs.postProducts(obj).subscribe({
  
   
  
    next: ()=>{
  
   
  
    alert("Successfully Added .Thank you..")
  
   
  
    this.name="",
  
   
  
    this.type="",
  
   
  
    this.image="",
  
   
  
    this.price="",
  
   
  
    this.description="",
  
   
  
     this.quantity=""
  
   
  
    },
  
   
  
    error: ()=>alert("There is a problem in adding this!")
  
   
  
    }
  
   
  
    )
  
   
  
    }
  
   
  
    }
  
   
  
    }
