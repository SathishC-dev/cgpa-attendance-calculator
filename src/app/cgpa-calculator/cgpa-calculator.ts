import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cgpa-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './cgpa-calculator.html',
  styleUrl: './cgpa-calculator.css'
})
export class CGPACalculator {
  subjects: { name: string; credit: number; grade: string }[] = [
    { name: '', credit: 0, grade: '' },
    { name: '', credit: 0, grade: '' },
    { name: '', credit: 0, grade: '' }
  ];

  totalCredits: number = 0;
  gpa: number = 0;

  // Grade to Grade Point Map
  gradeMap: { [key: string]: number } = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'U': 0
  };

  addSubject() {
    this.subjects.push({ name: '', credit: 0, grade: '' });
  }

  removeSubject() {
    if (this.subjects.length > 1) {
      this.subjects.pop();
    }
  }

  calculateTotalCredits() {
    this.totalCredits = this.subjects.reduce(
      (sum, subject) => sum + (subject.credit || 0),
      0
    );
  }

  calculateGPA() {
    let totalCredits = 0;
    let weightedSum = 0;

    for (const subject of this.subjects) {
      const gradePoint = this.gradeMap[subject.grade.toUpperCase()] ?? 0;
      totalCredits += subject.credit;
      weightedSum += subject.credit * gradePoint;
    }

    this.gpa = totalCredits > 0 ? parseFloat((weightedSum / totalCredits).toFixed(2)) : 0;
    this.totalCredits = totalCredits;
  }
}