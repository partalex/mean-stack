import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredLoginDoctorComponent } from './unregistered-login-doctor.component';

describe('UnregisteredLoginDoctorComponent', () => {
  let component: UnregisteredLoginDoctorComponent;
  let fixture: ComponentFixture<UnregisteredLoginDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredLoginDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregisteredLoginDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
