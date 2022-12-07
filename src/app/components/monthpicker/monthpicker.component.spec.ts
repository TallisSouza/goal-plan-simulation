import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthpickerComponent } from './monthpicker.component';

describe('MonthpickerComponent', () => {
  let component: MonthpickerComponent;
  let fixture: ComponentFixture<MonthpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthpickerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goToNextMonth', () => {
    it('should update month value', () => {
      component.month.setMonth(1);
      component.goToNextMonth();
      expect(component.month.getMonth()).toBe(2);
    });
    it('should set canGoToPreviousMonth flag to true', () => {
      component.month.setMonth(1);
      component.canGoToPreviousMonth = false;
      component.goToNextMonth();
      expect(component.canGoToPreviousMonth).toBe(true);
    });
    it('should emit event with new month value', () => {
      component.month.setMonth(1);
      spyOn(component.monthChanged, 'emit');
      component.goToNextMonth();
      expect(component.monthChanged.emit).toHaveBeenCalledWith(component.month);
    });
  });

  describe('goToPreviousMonth', () => {
    it('should update month value', () => {
      component.canGoToPreviousMonth = true;
      component.month.setMonth(3);
      component.goToPreviousMonth();
      expect(component.month.getMonth()).toBe(2);
    });
    it('should set canGoToPreviousMonth flag to false', () => {
      component.initialDate.setMonth(0)
      component.canGoToPreviousMonth = true;
      component.month.setMonth(1);
      component.goToPreviousMonth();
      expect(component.canGoToPreviousMonth).toBe(false);
    });
    it('should emit event with new month value', () => {
      component.canGoToPreviousMonth = true;
      component.month.setMonth(1);
      spyOn(component.monthChanged, 'emit');
      component.goToPreviousMonth();
      expect(component.monthChanged.emit).toHaveBeenCalledWith(component.month);
    });
    it('should do nothing if canGoToPreviousMonth flag is false', () => {
      component.canGoToPreviousMonth = false;
      component.goToPreviousMonth();
      spyOn(component.monthChanged, 'emit');
      expect(component.monthChanged.emit).toHaveBeenCalledTimes(0);
    });
  });
});
