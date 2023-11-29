import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  items: MenuItem[] | undefined;
  title = 'ecommerce-app-curso3';
  products = [];

  ngOnInit(): void {

    this.items = [
      { label: 'Login', icon: 'pi pi-fw pi-home', routerLink: ['/login'] },
      { label: 'Clientes', icon: 'pi pi-fw pi-calendar', routerLink: ['/clients'] },
      { label: 'Productos', icon: 'pi pi-fw pi-pencil', routerLink: ['/products-list'] },
      { label: 'Compras', icon: 'pi pi-fw pi-file', routerLink: ['/shopping-list'] }
    ];
  }
}
