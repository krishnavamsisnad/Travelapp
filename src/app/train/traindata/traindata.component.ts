import { Component, OnInit } from '@angular/core';
import { BusserivesService } from 'src/app/busserives.service';

@Component({
  selector: 'app-traindata',
  templateUrl: './traindata.component.html',
  styleUrls: ['./traindata.component.css']
})
export class TraindataComponent implements OnInit {

   trains:any[]=[];
   constructor(private bs:BusserivesService){}

  ngOnInit(): void {
    this.trains=this.bs.getTrain();
  }



 


}
