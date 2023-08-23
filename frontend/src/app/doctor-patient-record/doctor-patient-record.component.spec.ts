import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientRecordComponent } from './doctor-patient-record.component';

describe('DoctorPatientRecordComponent', () => {
  let component: DoctorPatientRecordComponent;
  let fixture: ComponentFixture<DoctorPatientRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPatientRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPatientRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
