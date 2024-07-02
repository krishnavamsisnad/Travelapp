import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusdataComponent } from './busdata/busdata.component';

const routes: Routes = [
  {
    path:"",component:BusdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
