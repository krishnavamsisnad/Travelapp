import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraindataComponent } from './traindata.component';

describe('TraindataComponent', () => {
  let component: TraindataComponent;
  let fixture: ComponentFixture<TraindataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraindataComponent]
    });
    fixture = TestBed.createComponent(TraindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
