import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsWiiComponent } from './videjocs-wii.component';

describe('VidejocsWiiComponent', () => {
  let component: VidejocsWiiComponent;
  let fixture: ComponentFixture<VidejocsWiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsWiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsWiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
