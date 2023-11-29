import { Injectable } from '@angular/core';
import { BaseService } from './shared/baseApi.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductModel } from '../models/products/product.model';

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
}
