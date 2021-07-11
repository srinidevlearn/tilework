import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductApiService } from './card-api.service';
import { Product } from './interface';

@Component({
  selector: 'app-product-card-view',
  templateUrl: './product-card-view.component.html',
  styleUrls: ['./product-card-view.component.css']
})
export class ProductCardViewComponent implements OnInit {
  destroy$ = new Subject();
  productLists:Product[]=[];

  constructor(private api:ProductApiService) { }

  ngOnInit(): void {
    this.api.getHeros().pipe(takeUntil(this.destroy$)).subscribe((d:Product[])=>{
     this.productLists = d.length ? d.map(i=>i) : [];
    })
    
  }
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}
