import { Component, OnInit } from '@angular/core';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent implements OnInit {
  dietlist: any;

  constructor(private ds: DietService) {
    this.ds.getDiet().subscribe({
      next: (data: any) => this.dietlist = data,
      error: () => this.dietlist = []
    });
  }

  ngOnInit(): void {
  }
}
