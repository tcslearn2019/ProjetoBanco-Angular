import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoUserComponent } from './investimento-user.component';

describe('InvestimentoUserComponent', () => {
  let component: InvestimentoUserComponent;
  let fixture: ComponentFixture<InvestimentoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
