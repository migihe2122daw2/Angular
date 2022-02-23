import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsPcComponent } from './videjocs-pc.component';

describe('VidejocsPcComponent', () => {
  let component: VidejocsPcComponent;
  let fixture: ComponentFixture<VidejocsPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
