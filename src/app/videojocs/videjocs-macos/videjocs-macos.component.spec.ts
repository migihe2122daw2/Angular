import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsMacosComponent } from './videjocs-macos.component';

describe('VidejocsMacosComponent', () => {
  let component: VidejocsMacosComponent;
  let fixture: ComponentFixture<VidejocsMacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsMacosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsMacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
