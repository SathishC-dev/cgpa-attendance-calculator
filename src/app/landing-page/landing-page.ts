import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterModule,CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  features = [
    {
      img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
      alt: 'CGPA',
      title: 'Accurate CGPA',
      desc: 'Instantly calculate your CGPA with an easy-to-use UI.'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/747/747310.png',
      alt: 'Attendance',
      title: 'Track Attendance',
      desc: 'See how many classes you can miss and still be safe!'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/1047/1047711.png',
      alt: 'Responsive',
      title: 'Mobile Friendly',
      desc: 'Use it on desktop or mobile with full responsiveness.'
    }
  ];
}
