import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsermanagementModule } from './usermanagement/usermanagement.module';
import { HttpClientModule } from '@angular/common/http';
import { BusModule } from './bus/bus.module';
import { TrainModule } from './train/train.module';
import { FlightModule } from './flight/flight.module';
import { CabModule } from './cab/cab.module';
import { HotelModule } from './hotel/hotel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsermanagementModule,
    HttpClientModule,
    BusModule,
    TrainModule,
    FlightModule,
    CabModule,
    HotelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
