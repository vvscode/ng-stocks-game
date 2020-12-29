import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNumberComponent } from './day-number.component';

describe('DayNumberComponent', () => {
  let component: DayNumberComponent;
  let fixture: ComponentFixture<DayNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
