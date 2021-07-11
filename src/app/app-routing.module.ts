import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UploadformComponent } from './uploadform/uploadform.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'product-upload', component: UploadformComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
