import { Component } from '@angular/core';
import { BusserivesService } from 'src/app/busserives.service';
import { bus } from 'src/app/busserives.service';

@Component({
  selector: 'app-busdata',
  templateUrl: './busdata.component.html',
  styleUrls: ['./busdata.component.css']
})
export class BusdataComponent {
  busesdata:any
  buses:any[]=[];
  searchFrom=""
  searchTo=""
  constructor(public busdata:BusserivesService){}

  ngOnInit(){
    // this.busdata.getbus().subscribe((res:any)=>{
    //   console.log(res)
    //     this.busesdata=res;
    // })
    this.buses=this.busdata.getBus();
    // this.busdata.getbus().subscribe((res:bus[])=>{
    //   this.buses=res
    //   console.log(this.buses)
    // },error=>{
    //   console.log("error", error)
    // })
  }
}
