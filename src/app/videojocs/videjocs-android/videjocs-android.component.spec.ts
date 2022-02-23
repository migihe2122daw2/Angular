import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsAndroidComponent } from './videjocs-android.component';

describe('VidejocsAndroidComponent', () => {
  let component: VidejocsAndroidComponent;
  let fixture: ComponentFixture<VidejocsAndroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsAndroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
