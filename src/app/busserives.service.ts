import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusserivesService {

  constructor(public http:HttpClient) { }
  busapiurl="http://localhost:3000/busdata"
  seatapiurl="http://localhost:3000/seats"
  getbus(){
    return this.http.get(`${this.busapiurl}`)
  }
  getseat(){
    return this.http.get(`${this.seatapiurl}`)
  }
 
}
