import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRegisterDoctorComponent } from './manager-register-doctor.component';

describe('ManagerRegisterDoctorComponent', () => {
  let component: ManagerRegisterDoctorComponent;
  let fixture: ComponentFixture<ManagerRegisterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRegisterDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerRegisterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
