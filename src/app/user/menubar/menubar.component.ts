import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  lang:any= "english"
  languages:any=[
    {name:"English",value:"english"},
    {name:"Tamil",value:"tamil"},
    {name:"Telugu",value:"telugu"},
    {name:"Hindi",value:"hindi"}

  ]
  constructor(private router:Router,private ar:ActivatedRoute,private ts:TranslateService) {
    this.ts.use(this.lang)
   }
   changeLang():void{
    this.ts.use(this.lang)
 }
  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'],{relativeTo:this.ar})
  }
  dietplan(){
this.router.navigate(['Dietplan'],{relativeTo:this.ar})
  }
  create(){
    this.router.navigate(['Create'],{relativeTo:this.ar})
  }
  forum(){
    this.router.navigate(['Forum'],{relativeTo:this.ar})
  }
  testimonials(){
    this.router.navigate(['Testimonials'],{relativeTo:this.ar})
  }
  reachus(){
    this.router.navigate(['Reachus'],{relativeTo:this.ar})
  }

}
