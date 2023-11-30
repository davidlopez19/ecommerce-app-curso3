import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductService } from '../services/product.service';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    ListProductComponent,
    DeleteProductComponent,
    DetailProductComponent,
  ],
  providers: [ProductService],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    CardModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
  ],
})
export class ProductsModule {}
