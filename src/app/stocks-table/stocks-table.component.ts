import { Component, Input } from '@angular/core';
import { StockStats } from '../stock-stats.service';

@Component({
  selector: 'app-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.css']
})
export class StocksTableComponent {
  @Input() stats: StockStats[] = [];
}
