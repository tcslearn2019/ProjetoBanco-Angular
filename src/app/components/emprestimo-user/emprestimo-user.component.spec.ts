import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoUserComponent } from './emprestimo-user.component';

describe('EmprestimoUserComponent', () => {
  let component: EmprestimoUserComponent;
  let fixture: ComponentFixture<EmprestimoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprestimoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprestimoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
