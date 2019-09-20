import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarInvestimentoComponent } from './realizar-investimento.component';

describe('RealizarInvestimentoComponent', () => {
  let component: RealizarInvestimentoComponent;
  let fixture: ComponentFixture<RealizarInvestimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarInvestimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
