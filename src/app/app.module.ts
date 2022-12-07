import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { FormsModule } from '@angular/forms';
import { AmountInputComponent } from './components/amount-input/amount-input.component';
import { CurrencyPipe } from '@angular/common';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MonthpickerComponent } from './components/monthpicker/monthpicker.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SimulatorComponent,
    AmountInputComponent,
    MonthpickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
