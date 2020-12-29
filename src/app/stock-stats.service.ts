import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StockStats {
  fullName: string;
  tickerSymbol: string;
  initialValue: number;
  currentValue: number;
}

interface RemoveStockStats {
  name: string;
  symbol: string;
  price: number;
}

const STOCK_STATS_URL = 'https://staging-api.brainbase.com/stocks.php';

@Injectable({
  providedIn: 'root'
})
export class StockStatsService {
  private initialStatsLoading: Promise<void>;
  private stats: StockStats[][] = [];

  constructor(private http: HttpClient) {
    this.initialStatsLoading = this.loadInitialStats();
  }

  private async loadInitialStats() {
    const serverData = await this.http.get(STOCK_STATS_URL, {
      responseType: 'json'
    }).toPromise() as RemoveStockStats[];
    this.stats[0] = serverData.map((el) => ({
      fullName: el.name,
      tickerSymbol: el.symbol,
      initialValue: el.price,
      currentValue: el.price
    }));
  }

  public async getStockStats(dayNumber: number): Promise<StockStats[]> {
    if (dayNumber < 0) {
      throw new Error(`Expected value above or equal to 0`);
    }
    if (Math.trunc(dayNumber) !== dayNumber) {
      throw new Error('Expected value to be integer');
    }
    await this.initialStatsLoading;

    for (let i = 1; i <= dayNumber; i++) {
      this.stats[i] = this.stats[i - 1].map((el) => ({
        ...el,
        currentValue: (Math.random() > 0.5 ? 0.9 : 1.1) * el.currentValue
      }))
    }
    return this.stats[dayNumber]
  }
}
