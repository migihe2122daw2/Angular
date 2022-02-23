import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsAventuraComponent } from './videjocs-aventura.component';

describe('VidejocsAventuraComponent', () => {
  let component: VidejocsAventuraComponent;
  let fixture: ComponentFixture<VidejocsAventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsAventuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsAventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
