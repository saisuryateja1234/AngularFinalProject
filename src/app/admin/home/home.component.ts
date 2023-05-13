import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { AddproductComponent } from '../addproduct/addproduct.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any;
  dataSource: any;
  edit = {
    id: '',
    name: '',
    quantity: '',
    type: ''
  };
  displayedColumns: string[] = ['id', 'name', 'type', 'quantity'];
  constructor(public dialog: MatDialog, public ps: ProductService) {
    this.ps.getProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        this.dataSource = new MatTableDataSource(this.products);
      },
      error: () => this.products = []
    });
  }
  openDialog() {
    this.dialog.open(AddproductComponent);
  }
}
