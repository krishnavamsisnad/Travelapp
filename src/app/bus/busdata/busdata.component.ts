import { Component } from '@angular/core';
import { BusserivesService } from 'src/app/busserives.service';

@Component({
  selector: 'app-busdata',
  templateUrl: './busdata.component.html',
  styleUrls: ['./busdata.component.css']
})
export class BusdataComponent {
  busesdata:any
  searchFrom=""
  searchTo=""
  constructor(public busdata:BusserivesService){}

  ngOnInit(){
    this.busdata.getbus().subscribe((res:any)=>{
      console.log(res)
        this.busesdata=res;
    })
  }
}
