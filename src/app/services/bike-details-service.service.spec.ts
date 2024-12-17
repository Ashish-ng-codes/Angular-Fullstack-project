import { TestBed } from '@angular/core/testing';

import { BikeDetailsServiceService } from './bike-details-service.service';

describe('BikeDetailsServiceService', () => {
  let service: BikeDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
