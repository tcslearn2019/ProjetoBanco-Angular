import { TestBed } from '@angular/core/testing';

import { TipoInvestimento } from './tipoinvestimento.service';

describe('TipoinvestimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoInvestimento = TestBed.get(TipoInvestimento);
    expect(service).toBeTruthy();
  });
});
