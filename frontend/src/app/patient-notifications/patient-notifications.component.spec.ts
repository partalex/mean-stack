import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNotificationsComponent } from './patient-notifications.component';

describe('PatientNotificationsComponent', () => {
  let component: PatientNotificationsComponent;
  let fixture: ComponentFixture<PatientNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
