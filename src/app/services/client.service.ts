import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ClientModel } from '../models/clients/client.model';
import { BaseService } from './shared/baseApi.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService {

  constructor(private _httpClientResolve: HttpClient) {
    super(_httpClientResolve);
  }

  getListClients(): Observable<Array<ClientModel>> {
    return this.get<Array<ClientModel>>('api/Clientes', '', true).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
