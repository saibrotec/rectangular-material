import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RngRouterComponent } from './rng-router.component';

describe('RngRouterComponent', () => {
  let component: RngRouterComponent;
  let fixture: ComponentFixture<RngRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RngRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RngRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
