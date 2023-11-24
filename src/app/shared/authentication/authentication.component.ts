import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationModel } from 'src/app/models/shared/user/authetication.model';
import { AuthenticationService } from 'src/app/services/shared/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  authentication: AutheticationModel = new AutheticationModel();

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  login() {
    this._authenticationService
      .loginToApi(this.authentication)
      .subscribe((result) => {
        console.log(result);
        this._router.navigateByUrl('clients-list');
      });
  }
}
