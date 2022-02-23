import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsIosComponent } from './videjocs-ios.component';

describe('VidejocsIosComponent', () => {
  let component: VidejocsIosComponent;
  let fixture: ComponentFixture<VidejocsIosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsIosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
