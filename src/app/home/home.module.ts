import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarouselModule} from 'ng2-bootstrap';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [ CommonModule, CarouselModule, BrowserModule],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule {
}
