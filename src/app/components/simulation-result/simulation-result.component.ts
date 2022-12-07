import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simulation-result',
  templateUrl: './simulation-result.component.html',
  styleUrls: ['./simulation-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimulationResultComponent {
  @Input() monthlyAmount = 0;
  @Input() monthAmount = 0;
  @Input() amount = 0;
  @Input() date = new Date();
}
