import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenContentComponent } from './home-screen-content.component';

describe('HomeScreenContentComponent', () => {
  let component: HomeScreenContentComponent;
  let fixture: ComponentFixture<HomeScreenContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeScreenContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
