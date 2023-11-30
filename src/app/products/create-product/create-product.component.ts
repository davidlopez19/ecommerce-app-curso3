import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/products/product.model';
import { StateProductModel } from 'src/app/models/products/state-product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productCreate: ProductModel = new ProductModel();
  listStatusProduct: Array<StateProductModel> = [];

  constructor(private _productService: ProductService, private _router: Router){}
  
  ngOnInit(): void {
    this.listStatusProduct = this._productService.getListStatusProduct();
  }

  saveInformation() {
    this._productService.saveProduct(this.productCreate)
    .subscribe((result) => {
      this._router.navigateByUrl('products-list')
    });
  }
}
