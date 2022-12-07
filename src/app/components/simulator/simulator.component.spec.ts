import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorComponent } from './simulator.component';

describe('SimulatorComponent', () => {
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateSimulation', () => {
    it('should match all the values', () => {
      jasmine.clock().install();
      jasmine.clock().mockDate(new Date('2022-1-1'));
      component.selectedMonth.setMonth(6);
      component.selectedMonth.setFullYear(2025);
      component.amount = 42000;
      component.updateSimulation();
      expect(component.monthAmount).toBe(42);
      expect(component.monthlyAmount).toBe(1000);
    });
  });
});
