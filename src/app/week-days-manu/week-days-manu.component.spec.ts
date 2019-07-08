import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDaysManuComponent } from './week-days-manu.component';

describe('WeekDaysManuComponent', () => {
  let component: WeekDaysManuComponent;
  let fixture: ComponentFixture<WeekDaysManuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekDaysManuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekDaysManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
