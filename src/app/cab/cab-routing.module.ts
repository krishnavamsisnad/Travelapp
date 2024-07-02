import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabdataComponent } from './cabdata/cabdata.component';

const routes: Routes = [
  {
    path:"", component:CabdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabRoutingModule { }
