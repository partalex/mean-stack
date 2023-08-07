import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredLoginManagerComponent } from './unregistered-login-manager.component';

describe('UnregisteredLoginManagerComponent', () => {
  let component: UnregisteredLoginManagerComponent;
  let fixture: ComponentFixture<UnregisteredLoginManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredLoginManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregisteredLoginManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
