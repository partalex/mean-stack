import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSkeletonComponent } from './doctor-skeleton.component';

describe('DoctorSkeletonComponent', () => {
  let component: DoctorSkeletonComponent;
  let fixture: ComponentFixture<DoctorSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
