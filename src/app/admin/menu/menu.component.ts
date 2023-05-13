import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private ar: ActivatedRoute) { }

  ngOnInit(): void {

  }

  addproduct() {
    this.router.navigate(['Addproduct'], { relativeTo: this.ar });
  }

  addresponse() {
    this.router.navigate(['Addresponses'], { relativeTo: this.ar });
  }
  home() {
    this.router.navigate(['Home'],{relativeTo: this.ar});
  }

}