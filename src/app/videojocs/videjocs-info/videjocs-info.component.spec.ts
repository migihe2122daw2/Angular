import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsInfoComponent } from './videjocs-info.component';

describe('VidejocsInfoComponent', () => {
  let component: VidejocsInfoComponent;
  let fixture: ComponentFixture<VidejocsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
