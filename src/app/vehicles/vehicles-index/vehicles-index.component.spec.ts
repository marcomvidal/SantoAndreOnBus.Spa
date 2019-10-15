import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesIndexComponent } from './vehicles-index.component';

describe('VehiclesIndexComponent', () => {
  let component: VehiclesIndexComponent;
  let fixture: ComponentFixture<VehiclesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
