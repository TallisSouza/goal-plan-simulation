import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-amount-input',
  templateUrl: './amount-input.component.html',
  styleUrls: ['./amount-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmountInputComponent {
  @Input() amount = 0;
  @Output() amountChange = new EventEmitter<number>();

  updateAmount(event: number): void {
    this.amount = event;
    this.amountChange.emit(this.amount);
  }
}
