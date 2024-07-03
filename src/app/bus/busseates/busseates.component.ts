import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BusserivesService } from 'src/app/busserives.service';

@Component({
  selector: 'app-busseates',
  templateUrl: './busseates.component.html',
  styleUrls: ['./busseates.component.css']
})
export class BusseatesComponent {
    seats:any;
    isBooked = false;
  constructor(public seat:BusserivesService){}
  ngOnInit(){
    this.seat.getseat().subscribe((res:any)=>{
      console.log(res)
        this.seats=res;
    })
  }
 

  booked(seat: any) {
    const index = this.seats.findIndex((s:any) => s.seatnumber === seat.seatnumber);
    if (index !== -1) {
      this.seats[index].seatstatus = this.seats[index].seatstatus === 'available' ? 'booked' : 'available';
    }
  }
}
