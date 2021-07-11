import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    CaroselComponent,
    ScrollDirective,
    UploadformComponent,
    FileInputAccessor,FormlyFieldFile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FileUploadModule,
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
    // FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
