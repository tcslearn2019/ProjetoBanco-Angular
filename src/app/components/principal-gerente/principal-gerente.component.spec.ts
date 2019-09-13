import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalGerenteComponent } from './principal-gerente.component';

describe('PrincipalGerenteComponent', () => {
  let component: PrincipalGerenteComponent;
  let fixture: ComponentFixture<PrincipalGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
