import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAnyComponent } from './doctor-any.component';

describe('DoctorAnyComponent', () => {
  let component: DoctorAnyComponent;
  let fixture: ComponentFixture<DoctorAnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
