import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewsComponent } from './patient-views.component';

describe('PatientViewsComponent', () => {
  let component: PatientViewsComponent;
  let fixture: ComponentFixture<PatientViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
