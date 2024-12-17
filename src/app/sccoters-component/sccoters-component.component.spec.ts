import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SccotersComponentComponent } from './sccoters-component.component';

describe('SccotersComponentComponent', () => {
  let component: SccotersComponentComponent;
  let fixture: ComponentFixture<SccotersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SccotersComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SccotersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
