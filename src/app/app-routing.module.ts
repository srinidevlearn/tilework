import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductCardViewComponent } from './product-card-view/product-card-view.component';
import { UploadformComponent } from './uploadform/uploadform.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'product-upload', component: UploadformComponent },
  { path: 'get-products', component: ProductCardViewComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
