import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {
  selectedMonth: Date = new Date();
  amount = 0;
  monthAmount = 1;
  monthlyAmount = 0;

  constructor() { }

  ngOnInit(): void {
    this.selectedMonth.setMonth(this.selectedMonth.getMonth() + 1);
  }

  updateSelectedMonth(date: Date): void {
    this.selectedMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    this.updateSimulation();
  }

  updateSimulation(): void {
    const today = new Date();
    const yearDifference = this.selectedMonth.getFullYear() - today.getFullYear();
    this.monthAmount = (yearDifference * 12) - (today.getMonth() - this.selectedMonth.getMonth());
    this.monthlyAmount = this.amount / this.monthAmount;
  }
}
