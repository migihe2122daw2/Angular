import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidejocsBuscarComponent } from './videjocs-buscar.component';

describe('VidejocsBuscarComponent', () => {
  let component: VidejocsBuscarComponent;
  let fixture: ComponentFixture<VidejocsBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidejocsBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidejocsBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
