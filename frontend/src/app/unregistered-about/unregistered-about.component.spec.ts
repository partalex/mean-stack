import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredAboutComponent } from './unregistered-about.component';

describe('UnregisteredAboutComponent', () => {
  let component: UnregisteredAboutComponent;
  let fixture: ComponentFixture<UnregisteredAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregisteredAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
