import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsAccionComponent } from './videjocs-accion.component';

describe('VidejocsAccionComponent', () => {
  let component: VidejocsAccionComponent;
  let fixture: ComponentFixture<VidejocsAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsAccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
