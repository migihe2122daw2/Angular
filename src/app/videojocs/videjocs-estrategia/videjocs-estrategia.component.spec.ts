import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsEstrategiaComponent } from './videjocs-estrategia.component';

describe('VidejocsEstrategiaComponent', () => {
  let component: VidejocsEstrategiaComponent;
  let fixture: ComponentFixture<VidejocsEstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsEstrategiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
