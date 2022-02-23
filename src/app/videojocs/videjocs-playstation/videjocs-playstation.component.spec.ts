import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsPlaystationComponent } from './videjocs-playstation.component';

describe('VidejocsPlaystationComponent', () => {
  let component: VidejocsPlaystationComponent;
  let fixture: ComponentFixture<VidejocsPlaystationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsPlaystationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsPlaystationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
