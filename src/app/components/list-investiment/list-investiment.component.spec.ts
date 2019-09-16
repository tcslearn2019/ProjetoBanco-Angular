import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvestimentComponent } from './list-investiment.component';

describe('ListInvestimentComponent', () => {
  let component: ListInvestimentComponent;
  let fixture: ComponentFixture<ListInvestimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInvestimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvestimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
