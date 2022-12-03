import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-amount-input',
  templateUrl: './amount-input.component.html',
  styleUrls: ['./amount-input.component.scss']
})
export class AmountInputComponent {
  @Input() amount = 0;
  @Output() amountChange = new EventEmitter<number>();

  updateAmount(event: any): void {
    this.amount = event;
    this.amountChange.emit(this.amount);
  }
}
