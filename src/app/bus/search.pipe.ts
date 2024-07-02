import { Pipe, PipeTransform } from '@angular/core';

interface Bus {
  busname: string;
  bustype: string;
  From: string;
  To: string;
  starttime: string;
  endtime: string;
  price: number;
}

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: Bus[], from: string, to: string): Bus[] {
    if (!value) return [];
    if (!from && !to) return value;
    return value.filter((item: Bus) => {
      return (
        (!from || item.From.toLowerCase().includes(from.toLowerCase())) &&
        (!to || item.To.toLowerCase().includes(to.toLowerCase()))
      );
    });
  }
}