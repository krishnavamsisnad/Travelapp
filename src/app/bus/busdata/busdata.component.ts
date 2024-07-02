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
<<<<<<< HEAD
  searchFrom=""
  searchTo=""
=======
  buses:any[]=[];
>>>>>>> 082d2929445e1525918eb81e6c5300617b713649
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
