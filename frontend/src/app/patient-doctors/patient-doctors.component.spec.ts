import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorsComponent } from './patient-doctors.component';

describe('PatientDoctorsComponent', () => {
  let component: PatientDoctorsComponent;
  let fixture: ComponentFixture<PatientDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
