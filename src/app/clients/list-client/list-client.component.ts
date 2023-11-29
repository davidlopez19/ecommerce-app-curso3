import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/models/clients/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit {
  clients: Array<ClientModel> = [];

  constructor(private _clientService: ClientService) {}

  ngOnInit() {
    this._clientService.getListClients().subscribe((result) => {
      this.clients = result;
    });
  }
}
