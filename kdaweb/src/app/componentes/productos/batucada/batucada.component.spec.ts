import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatucadaComponent } from './batucada.component';

describe('BatucadaComponent', () => {
  let component: BatucadaComponent;
  let fixture: ComponentFixture<BatucadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatucadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatucadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
