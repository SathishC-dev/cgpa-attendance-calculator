import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendance-calculator',
  imports: [FormsModule,CommonModule],
  templateUrl: './attendance-calculator.html',
  styleUrl: './attendance-calculator.css'
})
export class AttendanceCalculator {
  tittle = "Attendance Calculator";
  numbunk = "You can Bunk = ";
  days = " days";

  present:any;
  total: any;
  percentage:any;

  sum: string = '';
  bunk: string = '';

  add() {
    if (this.present > this.total || this.total === 0 || this.percentage > 100) {
      this.sum = '';
      this.bunk = 'Invalid Input. Please check the values.';
      return;
    }

    const currentPercentage = (this.present / this.total) * 100;
    this.sum = Math.floor(currentPercentage) + "%";

    const requiredFraction = this.percentage / 100;
    const maxTotalDays = Math.floor(this.present / requiredFraction);
    const bunkableDays = maxTotalDays - this.total;

    this.bunk = this.numbunk + (bunkableDays >= 0 ? bunkableDays : 0) + this.days;
  }
}