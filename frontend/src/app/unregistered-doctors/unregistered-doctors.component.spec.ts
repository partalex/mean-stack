import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredDoctorsComponent } from './unregistered-doctors.component';

describe('UnregisteredDoctorsComponent', () => {
  let component: UnregisteredDoctorsComponent;
  let fixture: ComponentFixture<UnregisteredDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregisteredDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
