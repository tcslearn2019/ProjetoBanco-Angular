import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacaoInvestimentoComponent } from './operacao-investimento.component';

describe('OperacaoInvestimentoComponent', () => {
  let component: OperacaoInvestimentoComponent;
  let fixture: ComponentFixture<OperacaoInvestimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacaoInvestimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacaoInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
