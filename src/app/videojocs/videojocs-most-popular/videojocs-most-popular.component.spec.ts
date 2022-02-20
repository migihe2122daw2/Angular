import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojocsMostPopularComponent } from './videojocs-most-popular.component';

describe('VideojocsMostPopularComponent', () => {
  let component: VideojocsMostPopularComponent;
  let fixture: ComponentFixture<VideojocsMostPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojocsMostPopularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojocsMostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
