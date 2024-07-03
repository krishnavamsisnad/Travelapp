import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusdataComponent } from './busdata/busdata.component';
import { HttpClientModule } from '@angular/common/http';
import { BusseatesComponent } from './busseates/busseates.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    BusdataComponent,
    BusseatesComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class BusModule { }
