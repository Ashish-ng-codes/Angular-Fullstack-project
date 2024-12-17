import { TestBed } from '@angular/core/testing';

import { YamahaServiceService } from './yamaha-service.service';

describe('YamahaServiceService', () => {
  let service: YamahaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YamahaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
