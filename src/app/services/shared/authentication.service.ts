import { Injectable } from '@angular/core';
import { BaseService } from './baseApi.service';
import { HttpClient } from '@angular/common/http';
import { AutheticationModel } from 'src/app/models/shared/user/authetication.model';
import { Observable, map } from 'rxjs';
import { AuthenticationResponse } from 'src/app/models/shared/user/authentication.response';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
  constructor(private _httpClientResolve: HttpClient) {
    super(_httpClientResolve);
  }

  loginToApi(
    authenticationModel: AutheticationModel
  ): Observable<AuthenticationResponse> {
    return this.post<AuthenticationResponse>(
      'api/Authenticate',
      authenticationModel,
      false
    ).pipe(
      map((result) => {
        localStorage.setItem('token', result.token);
        return result;
      })
    );
  }
}
