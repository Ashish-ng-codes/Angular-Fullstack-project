import { TestBed } from '@angular/core/testing';

import { BtnService } from './btn.service';

describe('BtnService', () => {
  let service: BtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
