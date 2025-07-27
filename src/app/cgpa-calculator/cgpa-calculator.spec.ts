import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGPACalculator } from './cgpa-calculator';

describe('CGPACalculator', () => {
  let component: CGPACalculator;
  let fixture: ComponentFixture<CGPACalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CGPACalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CGPACalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
