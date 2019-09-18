import { TestBed } from '@angular/core/testing';

import { TipoinvestimentoService } from './tipoinvestimento.service';

describe('TipoinvestimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoinvestimentoService = TestBed.get(TipoinvestimentoService);
    expect(service).toBeTruthy();
  });
});
