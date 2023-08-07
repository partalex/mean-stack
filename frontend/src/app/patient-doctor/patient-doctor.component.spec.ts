import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorComponent } from './patient-doctor.component';

describe('PatientDoctorComponent', () => {
  let component: PatientDoctorComponent;
  let fixture: ComponentFixture<PatientDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
