import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-number',
  templateUrl: './day-number.component.html',
  styleUrls: ['./day-number.component.css']
})
export class DayNumberComponent {
  @Input() dayNumber: number = 0;
}
