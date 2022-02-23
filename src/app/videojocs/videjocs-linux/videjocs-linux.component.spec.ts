import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsLinuxComponent } from './videjocs-linux.component';

describe('VidejocsLinuxComponent', () => {
  let component: VidejocsLinuxComponent;
  let fixture: ComponentFixture<VidejocsLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
