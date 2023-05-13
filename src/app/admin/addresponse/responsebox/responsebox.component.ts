import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsebox',
  templateUrl: './responsebox.component.html',
  styleUrls: ['./responsebox.component.css']
})
export class ResponseboxComponent {
  @Input () q:any;

  }
