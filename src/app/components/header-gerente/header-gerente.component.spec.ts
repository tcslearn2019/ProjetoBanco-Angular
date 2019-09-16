import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGerenteComponent } from './header-gerente.component';

describe('HeaderGerenteComponent', () => {
  let component: HeaderGerenteComponent;
  let fixture: ComponentFixture<HeaderGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
