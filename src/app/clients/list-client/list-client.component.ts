import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/clients/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: Array<ClientModel> = [];

  constructor(private _clientService: ClientService, private _router: Router) { }

  ngOnInit(): void {
    this._clientService.getListClients().subscribe((result) => {
      this.clients = result;
    });
  }
  
  redirectToCreate(): void {
    this._router.navigateByUrl('products-create');
  }
}
