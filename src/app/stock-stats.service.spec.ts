import { TestBed } from '@angular/core/testing';

import { StockStatsService } from './stock-stats.service';

describe('StockStatsService', () => {
  let service: StockStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
