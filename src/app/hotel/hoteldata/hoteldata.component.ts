import { Component, OnInit } from '@angular/core';
import { BusserivesService } from 'src/app/busserives.service';

@Component({
  selector: 'app-hoteldata',
  templateUrl: './hoteldata.component.html',
  styleUrls: ['./hoteldata.component.css']
})
export class HoteldataComponent implements OnInit{
  hotels:any[]=[];

  constructor(private bs:BusserivesService){}
  ngOnInit(): void {
    this.hotels=this.bs.getHotel();
  }


}
