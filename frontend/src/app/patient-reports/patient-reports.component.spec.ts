import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReportsComponent } from './patient-reports.component';

describe('PatientReportsComponent', () => {
  let component: PatientReportsComponent;
  let fixture: ComponentFixture<PatientReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
