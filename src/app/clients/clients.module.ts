import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientService } from '../services/client.service';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { DetailClientComponent } from './detail-client/detail-client.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ClientsComponent,
    CreateClientComponent,
    EditClientComponent,
    ListClientComponent,
    DetailClientComponent,
    
  ],
  providers: [ClientService],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    FormsModule,
    DropdownModule,
    ButtonModule
  ]
})
export class ClientsModule {}
