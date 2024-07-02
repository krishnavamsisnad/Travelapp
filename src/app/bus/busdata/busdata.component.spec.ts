import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdataComponent } from './busdata.component';

describe('BusdataComponent', () => {
  let component: BusdataComponent;
  let fixture: ComponentFixture<BusdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusdataComponent]
    });
    fixture = TestBed.createComponent(BusdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
