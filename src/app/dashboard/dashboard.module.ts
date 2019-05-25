import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShareModule } from '../share/share.module';
import { DashboardComponent } from './dashboard.component';
import { QuoteComponent } from './quote/quote.component';
import { MatCardModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent, QuoteComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})
export class DashboardModule { }
