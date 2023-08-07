import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewsComponent } from './doctor-views.component';

describe('DoctorViewsComponent', () => {
  let component: DoctorViewsComponent;
  let fixture: ComponentFixture<DoctorViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
