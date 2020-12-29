import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-date',
  templateUrl: './day-date.component.html',
  styleUrls: ['./day-date.component.css']
})
export class DayDateComponent {
  @Input() dayNumber: number = 0;

  public getFormattedDate(): string {
    const date = new Date(Date.now() + this.dayNumber * 24 * 60 * 60 * 1000);

    // @todo: date string format seems custom, so check next line to adjust it
    return date.toDateString();
  }
}
