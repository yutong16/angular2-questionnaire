import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    CoreModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
