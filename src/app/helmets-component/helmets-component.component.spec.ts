import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetsComponentComponent } from './helmets-component.component';

describe('HelmetsComponentComponent', () => {
  let component: HelmetsComponentComponent;
  let fixture: ComponentFixture<HelmetsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelmetsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmetsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
