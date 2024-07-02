import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", loadChildren:()=>import("./usermanagement/usermanagement.module").then(x=>x.UsermanagementModule)},
  {
    path:'bus',loadChildren:()=>import("./bus/bus.module").then(x=>x.BusModule)
  },
  {
    path:"train", loadChildren:()=>import("./train/train.module").then(x=>x.TrainModule)
  },
  {
    path:"flight", loadChildren:()=>import("./flight/flight.module").then(x=>x.FlightModule)
  },
  {
    path:"cab", loadChildren:()=>import("./cab/cab.module").then(x=>x.CabModule)
  },
  {
    path:"hotel", loadChildren:()=>import("./hotel/hotel.module").then(x=>x.HotelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
