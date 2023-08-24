import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNotificationComponent } from './manager-notification.component';

describe('ManagerNotificationComponent', () => {
  let component: ManagerNotificationComponent;
  let fixture: ComponentFixture<ManagerNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
