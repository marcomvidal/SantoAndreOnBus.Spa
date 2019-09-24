import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesIndexComponent } from './lines-index.component';

describe('LinesIndexComponent', () => {
  let component: LinesIndexComponent;
  let fixture: ComponentFixture<LinesIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
