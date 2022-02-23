import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsDeporteComponent } from './videjocs-deporte.component';

describe('VidejocsDeporteComponent', () => {
  let component: VidejocsDeporteComponent;
  let fixture: ComponentFixture<VidejocsDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsDeporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
