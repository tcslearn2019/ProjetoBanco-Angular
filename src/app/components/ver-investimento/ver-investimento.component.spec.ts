import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInvestimentoComponent } from './ver-investimento.component';

describe('VerInvestimentoComponent', () => {
  let component: VerInvestimentoComponent;
  let fixture: ComponentFixture<VerInvestimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInvestimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
