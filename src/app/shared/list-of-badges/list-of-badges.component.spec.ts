import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBadgesComponent } from './list-of-badges.component';

describe('ListOfBadgesComponent', () => {
  let component: ListOfBadgesComponent;
  let fixture: ComponentFixture<ListOfBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
