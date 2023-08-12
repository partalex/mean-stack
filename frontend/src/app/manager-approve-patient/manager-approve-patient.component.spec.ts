import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerApprovePatientComponent } from './manager-approve-patient.component';

describe('ManagerApprovePatientComponent', () => {
  let component: ManagerApprovePatientComponent;
  let fixture: ComponentFixture<ManagerApprovePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerApprovePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerApprovePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
