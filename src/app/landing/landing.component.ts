import { Component, HostListener, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
import { of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  percent: number = 0;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    // AOS.refresh();
  }

  constructor(private metaService: Meta) { 
    
    this.metaService.addTags([
      { name: 'description', content: "Jaswi Paints" },
      { property: 'og:title', content: 'Jaswi Paints for quick and efficient works' },
      { property: 'og:image:alt', content: 'assets/images/logo.png' },

      { name: 'google', description: 'notranslate' },
      {name:'google',description:'nopagereadaloud'},
      // {name:'robot',description:'noindex'}

    ]);
  }

  ngOnInit(): void {


    of(true).pipe(delay(1500), take(1)).subscribe(d => {
      this.lazylinePainting();
    })
    AOS.init({
      duration: 600,
      disable: 'phone',
      mirror: false,
      throttleDelay: 50,
    })




    // this.lazylinePainting();

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

    AOS.refresh()

  }

}
