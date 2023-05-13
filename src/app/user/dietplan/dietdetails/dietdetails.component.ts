import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-dietdetails',
  templateUrl: './dietdetails.component.html',
  styleUrls: ['./dietdetails.component.css']
})
export class DietDetailsComponent {
  id: any;
  details: any;

  constructor(private ds: DietService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.readData();
      },
      error: () => this.id = 0
    });
  }

  readData() {
    this.ds.getDetails(this.id).subscribe({
      next: (data: any) => this.details = data,
      error: () => this.details = {}
    });
  }
}
