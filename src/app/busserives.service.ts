import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusserivesService {

  constructor(public http:HttpClient) { }
  busapiurl="http://localhost:3000/busdata"
  getbus(){
    return this.http.get(`${this.busapiurl}`)
  }
}
