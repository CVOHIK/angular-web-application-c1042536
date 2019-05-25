import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReligionComponent } from './religion.component';

const routes: Routes = [
  { path: '', component: ReligionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReligionRoutingModule { }
