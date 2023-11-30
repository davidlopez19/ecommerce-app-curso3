import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/products/product.model';
import { StateProductModel } from 'src/app/models/products/state-product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productCreate: ProductModel = new ProductModel();
  listStatusProduct: Array<StateProductModel> = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.listStatusProduct = this._productService.getListStatusProduct();
  }

  saveInformation() {
    console.log(this.productCreate);
  }
}
