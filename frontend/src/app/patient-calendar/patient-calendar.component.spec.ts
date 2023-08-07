import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCalendarComponent } from './patient-calendar.component';

describe('PatientCalendarComponent', () => {
  let component: PatientCalendarComponent;
  let fixture: ComponentFixture<PatientCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
