import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  products: any;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.products;
      console.log(this.products);
      console.log('data: ', data);
    });
  }
}
