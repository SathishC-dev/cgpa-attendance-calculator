import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceCalculator } from './attendance-calculator';

describe('AttendanceCalculator', () => {
  let component: AttendanceCalculator;
  let fixture: ComponentFixture<AttendanceCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
