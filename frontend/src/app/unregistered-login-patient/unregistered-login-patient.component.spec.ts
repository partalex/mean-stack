import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredLoginPatientComponent } from './unregistered-login-patient.component';

describe('UnregisteredLoginPatientComponent', () => {
  let component: UnregisteredLoginPatientComponent;
  let fixture: ComponentFixture<UnregisteredLoginPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredLoginPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregisteredLoginPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
