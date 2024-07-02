import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { busdata } from 'src/data/Bus'
import { traindata } from 'src/data/Train'
import { flightdata } from 'src/data/Flight'
import { cabdata } from 'src/data/Cab'
import { hoteldata } from 'src/data/Hotel'
import { Observable } from 'rxjs';

export interface bus {
  bus_ID:number;
  bus_Number:number;
  bus_Name:string;
  from_Location:string;
  to_Location:string;
  availble_Seats:number;
  total_Seats:number

}
@Injectable({
  providedIn: 'root'
})
export class BusserivesService {

  private businfo=busdata;
  private traininfo=traindata;
  private flightinfo=flightdata;
  private cabinfo=cabdata;
  private hotelinfo=hoteldata;

  constructor(public http:HttpClient) { }
  // busapiurl="http://localhost:3000/busdata"
  // getbus(){
  //   return this.http.get(`${this.busapiurl}`)
  // }

  // busApiUrl="https://localhost:7091/api/Buses";

  // getbus(): Observable<bus[]>{
  //   return this.http.get<bus[]>(this.busApiUrl);
  // }

  getBus(){
    return this.businfo;
  }
  getTrain(){
    return this.traininfo;
  }
  getFlight(){
    return this.flightinfo;
  }
  getCab(){
    return this.cabinfo;
  }
  getHotel(){
    return this.hotelinfo;
  }
}
