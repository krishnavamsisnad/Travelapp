import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightdataComponent } from './flightdata/flightdata.component';


@NgModule({
  declarations: [
    FlightdataComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
