import { TestBed, inject } from '@angular/core/testing';

import { SimpleserviceService } from './simpleservice.service';

describe('SimpleserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleserviceService]
    });
  });

  it('should be created', inject([SimpleserviceService], (service: SimpleserviceService) => {
    expect(service).toBeTruthy();
  }));
});
