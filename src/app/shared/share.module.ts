import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    Ng2BootstrapModule
  ],
  exports: [Ng2BootstrapModule],
  providers: []
})

export class ShareModule {

}
