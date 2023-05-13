import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  details: any;

  constructor(private ds: DetailsService, private ar: ActivatedRoute) { }

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
