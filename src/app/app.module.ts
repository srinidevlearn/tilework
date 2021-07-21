import { NgModule } from '@angular/core';
import { BrowserModule,Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CaroselComponent } from './carosel/carosel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScrollDirective } from './scroll.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
// import { FormlyMaterialModule } from '@ngx-formly/material';
import { UploadformComponent } from './uploadform/uploadform.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FileInputAccessor } from './directives/file-input.directive';
import { FormlyFieldFile } from './uploadform/file-input-component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardViewComponent } from './product-card-view/product-card-view.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService } from './mock-api.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ProductApiService } from './product-card-view/card-api.service';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { LiquidButtonComponent } from './liquid-button/liquid-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    CaroselComponent,
    ScrollDirective,
    UploadformComponent,
    FileInputAccessor,FormlyFieldFile, ProductCardViewComponent, LiquidButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FileUploadModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(MockApiService,{ delay: 1500 }),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],
      // extras: { lazyRender: true } 
    }),
    FormlyBootstrapModule,
    ScullyLibModule,
    // FormlyMaterialModule
  ],
  providers: [ProductApiService,MockApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
