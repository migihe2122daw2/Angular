import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsNintendoComponent } from './videjocs-nintendo.component';

describe('VidejocsNintendoComponent', () => {
  let component: VidejocsNintendoComponent;
  let fixture: ComponentFixture<VidejocsNintendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsNintendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsNintendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
