import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayDateComponent } from './day-date.component';

describe('DayDateComponent', () => {
  let component: DayDateComponent;
  let fixture: ComponentFixture<DayDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
