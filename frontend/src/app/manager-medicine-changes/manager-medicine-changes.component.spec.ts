import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMedicineChangesComponent } from './manager-medicine-changes.component';

describe('ManagerMedicineChangesComponent', () => {
  let component: ManagerMedicineChangesComponent;
  let fixture: ComponentFixture<ManagerMedicineChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerMedicineChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerMedicineChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
