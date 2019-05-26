import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReligionRoutingModule } from './religion-routing.module';
import { ShareModule } from '../share/share.module';
import { ReligionComponent } from './religion.component';
import { MapComponent } from './map/map.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ReligionComponent, MapComponent],
  imports: [
    CommonModule,
    ReligionRoutingModule,
    ShareModule,
    FlexLayoutModule
  ]
})
export class ReligionModule { }
