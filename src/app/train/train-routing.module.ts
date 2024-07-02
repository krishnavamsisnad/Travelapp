import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraindataComponent } from './traindata/traindata.component';

const routes: Routes = [
  {
    path:"", component:TraindataComponent
  },
  // {
  //   path:"train/:id", component:
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainRoutingModule { }
