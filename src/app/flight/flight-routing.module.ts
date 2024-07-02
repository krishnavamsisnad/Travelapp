import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightdataComponent } from './flightdata/flightdata.component';

const routes: Routes = [
  {
    path:"", component:FlightdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
