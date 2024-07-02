import { Component, OnInit } from '@angular/core';
import { BusserivesService } from 'src/app/busserives.service';

@Component({
  selector: 'app-cabdata',
  templateUrl: './cabdata.component.html',
  styleUrls: ['./cabdata.component.css']
})
export class CabdataComponent implements OnInit{

  cabs:any[]=[];

  constructor(private bs:BusserivesService){}
  ngOnInit(): void {
    this.cabs=this.bs.getCab();
  }


}
