import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabRoutingModule } from './cab-routing.module';
import { CabdataComponent } from './cabdata/cabdata.component';


@NgModule({
  declarations: [
    CabdataComponent
  ],
  imports: [
    CommonModule,
    CabRoutingModule
  ]
})
export class CabModule { }
