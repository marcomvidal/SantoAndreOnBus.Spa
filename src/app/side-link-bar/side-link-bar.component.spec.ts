import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLinkBarComponent } from './side-link-bar.component';

describe('SideLinkBar', () => {
  let component: SideLinkBarComponent;
  let fixture: ComponentFixture<SideLinkBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLinkBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLinkBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
