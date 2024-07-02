import { TestBed } from '@angular/core/testing';

import { BusserivesService } from './busserives.service';

describe('BusserivesService', () => {
  let service: BusserivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusserivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
