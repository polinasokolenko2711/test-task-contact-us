import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [ ContactUsComponent ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class MainModule { }
