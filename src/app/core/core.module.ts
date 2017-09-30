import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareModule} from '../shared/share.module';

import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  providers: [],
  exports: [NavbarComponent],
  imports: [CommonModule, ShareModule]
})

export class CoreModule {

}
