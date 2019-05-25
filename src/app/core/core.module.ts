import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    RouterModule,
    HeaderComponent
  ]
})
export class CoreModule { }
