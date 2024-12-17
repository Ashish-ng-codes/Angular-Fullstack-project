import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclesComponentComponent } from './motorcycles-component.component';

describe('MotorcyclesComponentComponent', () => {
  let component: MotorcyclesComponentComponent;
  let fixture: ComponentFixture<MotorcyclesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcyclesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyclesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
