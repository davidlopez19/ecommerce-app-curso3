import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/clients/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  clientCreate: ClientModel = new ClientModel();

  constructor(private _clientService: ClientService, private _router: Router) { }

  ngOnInit() {
  }

  saveInformation() {
    this._clientService.saveClient(this.clientCreate)
    .subscribe((result) => {
      this._router.navigateByUrl('clients-list')
    });
  }
}
