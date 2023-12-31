import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientService } from '../services/client.service';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { DetailClientComponent } from './detail-client/detail-client.component';

@NgModule({
  imports: [CommonModule],
  providers: [ClientService],
  declarations: [
    ClientsComponent,
    CreateClientComponent,
    EditClientComponent,
    ListClientComponent,
    DetailClientComponent,
  ],
})
export class ClientsModule {}
