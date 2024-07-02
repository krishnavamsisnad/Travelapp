import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusdataComponent } from './busdata/busdata.component';
import { BusseatesComponent } from './busseates/busseates.component';

const routes: Routes = [
  {
    path:"",component:BusdataComponent
  },
  {
    path:"busseats",component:BusseatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
