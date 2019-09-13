import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentoNewComponent } from './investimento-new.component';

describe('InvestimentoNewComponent', () => {
  let component: InvestimentoNewComponent;
  let fixture: ComponentFixture<InvestimentoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestimentoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
