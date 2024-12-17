import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponentComponent } from './booking-component.component';

describe('BookingComponentComponent', () => {
  let component: BookingComponentComponent;
  let fixture: ComponentFixture<BookingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
