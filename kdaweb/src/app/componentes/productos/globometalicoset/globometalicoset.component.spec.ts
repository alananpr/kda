import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobometalicosetComponent } from './globometalicoset.component';

describe('GlobometalicosetComponent', () => {
  let component: GlobometalicosetComponent;
  let fixture: ComponentFixture<GlobometalicosetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobometalicosetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobometalicosetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
