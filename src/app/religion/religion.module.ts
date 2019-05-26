import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReligionRoutingModule } from './religion-routing.module';
import { ShareModule } from '../share/share.module';
import { ReligionComponent } from './religion.component';
import { MapComponent } from './map/map.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ReligionComponent, MapComponent],
  imports: [
    CommonModule,
    ReligionRoutingModule,
    ShareModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    })
  ]
})
export class ReligionModule { }
