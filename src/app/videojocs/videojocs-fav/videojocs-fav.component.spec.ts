import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojocsFavComponent } from './videojocs-fav.component';

describe('VideojocsFavComponent', () => {
  let component: VideojocsFavComponent;
  let fixture: ComponentFixture<VideojocsFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojocsFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojocsFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
