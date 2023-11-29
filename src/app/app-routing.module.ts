import { Injectable, NgModule, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { AuthenticationComponent } from './shared/authentication/authentication.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ListClientComponent } from './clients/list-client/list-client.component';
import { CreateShoppingComponent } from './shopping/create-shopping/create-shopping.component';
import { ListShoppingComponent } from './shopping/list-shopping/list-shopping.component';
import { ClientsComponent } from './clients/clients.component';
import { Observable, delay, tap, of } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthenticationComponent,
  },
  {
    path: 'products-create',
    component: CreateProductComponent,
  },
  {
    path: 'products-update',
    component: CreateProductComponent,
  },
  {
    path: 'products-list',
    component: ListProductComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'create',
    component: CreateClientComponent,
  },
  {
    path: 'clients-list',
    component: ListClientComponent,
  },
  {
    path: 'shopping-create',
    component: CreateShoppingComponent,
  },
  {
    path: 'shopping-list',
    component: ListShoppingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
