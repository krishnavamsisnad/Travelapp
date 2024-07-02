import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainRoutingModule } from './train-routing.module';
import { TraindataComponent } from './traindata/traindata.component';


@NgModule({
  declarations: [
    TraindataComponent
  ],
  imports: [
    CommonModule,
    TrainRoutingModule
  ]
})
export class TrainModule { }
