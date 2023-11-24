import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailShoppingComponent } from './detail-shopping/detail-shopping.component';
import { UpdateShoppingComponent } from './update-shopping/update-shopping.component';
import { CreateShoppingComponent } from './create-shopping/create-shopping.component';
import { ListShoppingComponent } from './list-shopping/list-shopping.component';
import { DeleteShoppingComponent } from './delete-shopping/delete-shopping.component';
import { ShoppingService } from '../services/shopping.service';

@NgModule({
  declarations: [
    DetailShoppingComponent,
    UpdateShoppingComponent,
    CreateShoppingComponent,
    ListShoppingComponent,
    DeleteShoppingComponent,
  ],
  providers: [ShoppingService],
  imports: [CommonModule],
})
export class ShoppingModule {}
