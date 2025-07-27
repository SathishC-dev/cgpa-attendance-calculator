import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { AttendanceCalculator } from './attendance-calculator/attendance-calculator';
import { CGPACalculator } from './cgpa-calculator/cgpa-calculator';
export const routes: Routes = [
    {path: '',component:LandingPage},
    {path: 'attendance',component:AttendanceCalculator},
    {path: 'cgpa',component:CGPACalculator}
];
