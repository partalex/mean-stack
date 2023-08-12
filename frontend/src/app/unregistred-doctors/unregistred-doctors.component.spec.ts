import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregistredDoctorsComponent } from './unregistred-doctors.component';

describe('UnregistredDoctorsComponent', () => {
  let component: UnregistredDoctorsComponent;
  let fixture: ComponentFixture<UnregistredDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregistredDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregistredDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
