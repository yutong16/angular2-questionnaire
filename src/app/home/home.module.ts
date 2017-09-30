import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareModule} from '../shared/share.module';
import {HomeComponent} from './home.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, ShareModule, BrowserModule, CoreModule],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule {
}
