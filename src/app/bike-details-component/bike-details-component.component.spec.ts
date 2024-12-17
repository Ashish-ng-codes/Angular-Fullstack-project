import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDetailsComponentComponent } from './bike-details-component.component';

describe('BikeDetailsComponentComponent', () => {
  let component: BikeDetailsComponentComponent;
  let fixture: ComponentFixture<BikeDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
