import { Component } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  filteredlist: any;
  itemslist: any;
  types: string[] = [
    "All",
    "Fruits",
    "Juices",
    "Salads",
    "Vegetables"
  ];
  selected: string = "All";
  searchValue: string = "";

  constructor(private ps:ItemsService) {
    this.ps.getitems().subscribe({
      next: (data: any) => {
        this.itemslist = data;
        this.filteredlist = data;
      },
      error: () => {
        this.itemslist = [];
        this.filteredlist = [];
      }
    });
  }

  filterProducts() {
    if (this.selected === "All") {
      this.filteredlist = this.itemslist;
    } else {
      this.filteredlist = this.itemslist.filter((product: any) => product.type === this.selected);
    }
    if (this.searchValue !== "") {
      this.filteredlist = this.filteredlist.filter((product: any) => product.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    }
  }
}