import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorProfileComponent } from './patient-doctor-profile.component';

describe('PatientDoctorProfileComponent', () => {
  let component: PatientDoctorProfileComponent;
  let fixture: ComponentFixture<PatientDoctorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDoctorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDoctorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
