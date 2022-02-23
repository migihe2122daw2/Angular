import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsXboxComponent } from './videjocs-xbox.component';

describe('VidejocsXboxComponent', () => {
  let component: VidejocsXboxComponent;
  let fixture: ComponentFixture<VidejocsXboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsXboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsXboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
