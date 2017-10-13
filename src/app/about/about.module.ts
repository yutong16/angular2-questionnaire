import {NgModule} from '@angular/core';
import {ShareModule} from '../shared/share.module';
import {CoreModule} from '../core/core.module';
import {AccordionModule} from 'ngx-bootstrap';

import {AboutComponent} from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [ShareModule, CoreModule, AccordionModule.forRoot()],
  exports: [AboutComponent]
})

export class AboutModule {
}
