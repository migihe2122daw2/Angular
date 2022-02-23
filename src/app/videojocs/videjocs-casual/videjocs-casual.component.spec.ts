import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsCasualComponent } from './videjocs-casual.component';

describe('VidejocsCasualComponent', () => {
  let component: VidejocsCasualComponent;
  let fixture: ComponentFixture<VidejocsCasualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsCasualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsCasualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
