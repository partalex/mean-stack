import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationManagerComponent } from './navigation-manager.component';

describe('NavigationManagerComponent', () => {
  let component: NavigationManagerComponent;
  let fixture: ComponentFixture<NavigationManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
