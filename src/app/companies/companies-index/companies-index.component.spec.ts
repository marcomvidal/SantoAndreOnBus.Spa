import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesIndexComponent } from './companies-index.component';

describe('CompaniesIndexComponent', () => {
  let component: CompaniesIndexComponent;
  let fixture: ComponentFixture<CompaniesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
