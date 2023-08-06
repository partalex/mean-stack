import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUnregisteredComponent } from './navigation-unregistered.component';

describe('NavigationUnregisteredComponent', () => {
  let component: NavigationUnregisteredComponent;
  let fixture: ComponentFixture<NavigationUnregisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationUnregisteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationUnregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
