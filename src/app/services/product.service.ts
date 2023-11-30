import { Injectable } from '@angular/core';
import { BaseService } from './shared/baseApi.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductModel } from '../models/products/product.model';
import { StateProductModel } from '../models/products/state-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(private _httpClientResolve: HttpClient) {
    super(_httpClientResolve);
  }

  getListProducts(): Observable<Array<ProductModel>> {
    return this.get<Array<ProductModel>>('api/Productos', '', true).pipe(
      map((result) => {
        return result;
      })
    );
  }

  getListStatusProduct(): Array<StateProductModel> {
    return [
      { idStatus: 1, nameStatus: 'Activo' },
      { idStatus: 2, nameStatus: 'Inactivo' },
      { idStatus: 3, nameStatus: 'Pendiente' },
    ];
  }

  saveProduct(productToSave: ProductModel)
  : Observable<ProductModel> {
    return this.post<ProductModel>(
      'api/Productos/create',
      productToSave,
      true
    ).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
