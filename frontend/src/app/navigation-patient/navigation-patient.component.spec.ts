import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPatientComponent } from './navigation-patient.component';

describe('NavigationPatientComponent', () => {
  let component: NavigationPatientComponent;
  let fixture: ComponentFixture<NavigationPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
