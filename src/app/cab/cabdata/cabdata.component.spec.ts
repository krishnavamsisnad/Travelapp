import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabdataComponent } from './cabdata.component';

describe('CabdataComponent', () => {
  let component: CabdataComponent;
  let fixture: ComponentFixture<CabdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabdataComponent]
    });
    fixture = TestBed.createComponent(CabdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
