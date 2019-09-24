import { TestBed } from '@angular/core/testing';

import { InvestimentosserviceService } from './investimentosservice.service';

describe('InvestimentosserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestimentosserviceService = TestBed.get(InvestimentosserviceService);
    expect(service).toBeTruthy();
  });
});
