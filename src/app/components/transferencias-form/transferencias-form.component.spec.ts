import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciasFormComponent } from './transferencias-form.component';

describe('TransferenciasFormComponent', () => {
  let component: TransferenciasFormComponent;
  let fixture: ComponentFixture<TransferenciasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
