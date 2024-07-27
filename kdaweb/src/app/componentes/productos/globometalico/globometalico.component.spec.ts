import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobometalicoComponent } from './globometalico.component';

describe('GlobometalicoComponent', () => {
  let component: GlobometalicoComponent;
  let fixture: ComponentFixture<GlobometalicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobometalicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobometalicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
