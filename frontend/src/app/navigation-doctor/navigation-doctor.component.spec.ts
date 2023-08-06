import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDoctorComponent } from './navigation-doctor.component';

describe('NavigationDoctorComponent', () => {
  let component: NavigationDoctorComponent;
  let fixture: ComponentFixture<NavigationDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
