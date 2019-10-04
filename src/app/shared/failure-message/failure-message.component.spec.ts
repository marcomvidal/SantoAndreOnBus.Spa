import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureMessageComponent } from './failure-message.component';

describe('FailureMessageComponent', () => {
  let component: FailureMessageComponent;
  let fixture: ComponentFixture<FailureMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
