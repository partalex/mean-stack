import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredIndexComponent } from './unregistered-index.component';

describe('UnregisteredIndexComponent', () => {
  let component: UnregisteredIndexComponent;
  let fixture: ComponentFixture<UnregisteredIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnregisteredIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
