import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { delay, take } from 'rxjs/operators';4
declare var dat:any


@Component({
  selector: 'app-liquid-button',
  templateUrl: './liquid-button.component.html',
  styleUrls: ['./liquid-button.component.css']
})
export class LiquidButtonComponent implements OnInit {


  constructor() { }

  ngOnInit(): void{}
  
  

}
