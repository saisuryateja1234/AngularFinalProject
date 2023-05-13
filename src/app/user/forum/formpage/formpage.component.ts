import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent {

  @Input()  f:any;
}
