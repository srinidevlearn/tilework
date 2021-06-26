import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  percent: number = 0;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() { }

  ngOnInit(): void {
    AOS.refresh();

    // setTimeout(() => {
    AOS.init({
      duration: 1200,
    })


    // }, 1000);

    this.lazylinePainting();

  }
  track(value: number): void {
    this.percent = value;
  }


  lazylinePainting() {
    // const svg = new Walkway({
    //   selector: '#homeComing',
    //   duration: 3000,
    // });
    
    // svg.draw();
    
  }

}
