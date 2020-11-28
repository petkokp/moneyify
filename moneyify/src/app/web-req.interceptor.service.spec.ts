import { TestBed } from '@angular/core/testing';

import { Webreqinterceptor } from './web-req.interceptor.service';

describe('WebreqinterceptorService', () => {
  let service: Webreqinterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Webreqinterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
