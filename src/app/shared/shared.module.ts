import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { AuthenticationService } from '../services/shared/authentication.service';
import { PreferencesService } from '../services/shared/preferences.service';
import { BaseService } from '../services/shared/baseApi.service';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';

@NgModule({
  declarations: [
    AuthenticationComponent,
    NotFoundComponent,
    PreferencesComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationService,
    PreferencesService,
    BaseService
  ],
})
export class SharedModule {}
