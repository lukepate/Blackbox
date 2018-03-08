import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { slideInLeft } from 'ng-animate';
import { bounceIn } from 'ng-animate';
import { fadeIn } from 'ng-animate';
import { fadeInDown } from 'ng-animate';
import { HostListener } from '@angular/core'
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  trigger(
    'enterAnimationTop', [
      transition(':enter', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]
  ),
  trigger(
    'enterAnimation', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]
  ),
  trigger(
    'enterAnimation2', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('700ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('1000ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]
  ),
  trigger(
    'enterAnimation3', [
      transition(':enter', [
        style({transform: 'translateX(100%)', opacity: 0}),
        animate('900ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('1500ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]
  ),
  trigger(
    'text1', [
      transition(':enter', [
        style({transform: 'translateY(10%)', opacity: 0}),
        animate('1.2s 1.5s ease-out')
      ])
    ]
  ),
  trigger(
    'text2', [
      transition(':enter', [
        style({transform: 'translateY(10%)', opacity: 0}),
        animate('.5s 2s ease-out')
      ])
    ]
  ),
  trigger(
    'text3', [
      transition(':enter', [
        style({transform: 'translateY(10%)', opacity: 0}),
        animate('1s 3s ease-out')
      ])
    ]
  )
]
})
export class AppComponent {
  title = 'app works!';
  bounce: any;
  slideInLeft: any;
  animateTwo: any = false;
  animateThree: any = false;
  a4: any = false;
  a5: any = false;
  a6: any = false;
  show: any = false;
  show1: any = false;
  show2: any = false;
  show3: any = false;

  text1: any = false;
  text2: any = false;
  text3: any = false;

  @HostListener('window:scroll', ['$event'])

  ngOnInit() {
    if(window.pageYOffset > 200){
      this.show = true;
    }
    if(window.pageYOffset > 250){
      this.show1 = true;
    }
    if(window.pageYOffset > 260){
      this.show2 = true;
    }
    if(window.pageYOffset > 270){
      this.show3 = true;
    }
    if(window.pageYOffset > 300){
      this.text1 = true;
      this.text2 = true;
      this.text3 = true;
    }
  }



}
