import { Component, OnInit } from '@angular/core';
import { BusserivesService } from 'src/app/busserives.service';

@Component({
  selector: 'app-flightdata',
  templateUrl: './flightdata.component.html',
  styleUrls: ['./flightdata.component.css']
})
export class FlightdataComponent implements OnInit {

  flights:any[]=[];

  constructor(private bs:BusserivesService){}


  ngOnInit(): void {
    this.flights=this.bs.getFlight();
  }


}
