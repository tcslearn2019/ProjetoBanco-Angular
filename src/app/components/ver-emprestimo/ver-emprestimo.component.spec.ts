import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmprestimoComponent } from './ver-emprestimo.component';

describe('VerEmprestimoComponent', () => {
  let component: VerEmprestimoComponent;
  let fixture: ComponentFixture<VerEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
