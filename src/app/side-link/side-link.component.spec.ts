import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLinkComponent } from './side-link.component';

describe('SideLinkComponent', () => {
  let component: SideLinkComponent;
  let fixture: ComponentFixture<SideLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
