import { Component } from '@angular/core';
import { StockStats, StockStatsService } from './stock-stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dayCounter: number = 0;

  public dayStats: StockStats[] = [];

  public incDayCounter() {
    this.dayCounter += 1;
    this.handleDayCounterChange();
  }

  public decDayCounter() {
    this.dayCounter = this.dayCounter > 0 ? this.dayCounter - 1 : this.dayCounter;
    this.handleDayCounterChange();
  }

  private async handleDayCounterChange() {
    this.dayStats = [];
    console.log('dayCounter', this.dayCounter);
    this.dayStats = await this.stockStatsService.getStockStats(this.dayCounter);
    console.log('dayStats', this.dayStats);
  }

  constructor(private stockStatsService: StockStatsService) { }
}
