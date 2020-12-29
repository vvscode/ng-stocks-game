import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DayNumberComponent } from './day-number/day-number.component';
import { DayDateComponent } from './day-date/day-date.component';
import { StocksTableComponent } from './stocks-table/stocks-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DayNumberComponent,
    DayDateComponent,
    StocksTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
