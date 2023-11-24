/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseApiService } from './baseApi.service';

describe('Service: BaseApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseApiService]
    });
  });

  it('should ...', inject([BaseApiService], (service: BaseApiService) => {
    expect(service).toBeTruthy();
  }));
});
