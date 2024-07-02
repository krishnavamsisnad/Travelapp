import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusdataComponent } from './busdata/busdata.component';
import { HttpClientModule } from '@angular/common/http';
import { BusseatesComponent } from './busseates/busseates.component';


@NgModule({
  declarations: [
    BusdataComponent,
    BusseatesComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    HttpClientModule
  ]
})
export class BusModule { }
