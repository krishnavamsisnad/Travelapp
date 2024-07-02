import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusseatesComponent } from './busseates.component';

describe('BusseatesComponent', () => {
  let component: BusseatesComponent;
  let fixture: ComponentFixture<BusseatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusseatesComponent]
    });
    fixture = TestBed.createComponent(BusseatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
