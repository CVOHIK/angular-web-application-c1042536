import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReligionRoutingModule } from './religion-routing.module';
import { ShareModule } from '../share/share.module';
import { ReligionComponent } from './religion.component';

@NgModule({
  declarations: [ReligionComponent],
  imports: [
    CommonModule,
    ReligionRoutingModule,
    ShareModule
  ]
})
export class ReligionModule { }
