import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusModule } from './bus/bus.module';

const routes: Routes = [
  {path:"", loadChildren:()=>import("./usermanagement/usermanagement.module").then(x=>x.UsermanagementModule)},
  {
    path:'bus',loadChildren:()=>import("./bus/bus.module").then(x=>x.BusModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
