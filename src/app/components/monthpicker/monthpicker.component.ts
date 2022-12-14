import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-monthpicker',
  templateUrl: './monthpicker.component.html',
  styleUrls: ['./monthpicker.component.scss']
})
export class MonthpickerComponent implements OnInit {
  @Output() monthChanged = new EventEmitter<Date>();

  month: Date = new Date();
  initialDate: Date = new Date();
  canGoToPreviousMonth = false;

  @ViewChild('monthInput') monthInput!: ElementRef<HTMLInputElement>;

  @HostListener('click') onClick() {
    this.focusInput();
  }

  ngOnInit(): void {
    this.month.setMonth(this.month.getMonth() + 1);
    this.initialDate.setMonth(this.initialDate.getMonth() + 1);
  }

  goToNextMonth(): void {
    this.month.setMonth(this.month.getMonth() + 1);
    this.canGoToPreviousMonth = true;
    this.updateDate();
  }

  goToPreviousMonth(): void {
    if (this.canGoToPreviousMonth) {
      this.month.setMonth(this.month.getMonth() - 1);
      if (this.compareMonths(this.month, this.initialDate)) {
        this.canGoToPreviousMonth = false;
      }
      this.updateDate();
    }
  }

  focusInput(): void {
    this.monthInput.nativeElement.focus();
  }

  private compareMonths(dateA: Date, dateB: Date): boolean {
    return dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear()
  }

  private updateDate(): void {
    this.month = new Date(
      this.month.getFullYear(),
      this.month.getMonth(),
      this.month.getDate()
    );
    this.monthChanged.emit(this.month);
  }
}
