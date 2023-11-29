import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products: Array<ProductModel> = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getListProducts().subscribe((result) => {
      this.products = result;
    });
  }
}
