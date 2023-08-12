import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsCardsComponent } from './doctors-cards.component';

describe('DoctorsCardsComponent', () => {
  let component: DoctorsCardsComponent;
  let fixture: ComponentFixture<DoctorsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
