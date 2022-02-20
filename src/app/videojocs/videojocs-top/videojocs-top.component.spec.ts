import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojocsTopComponent } from './videojocs-top.component';

describe('VideojocsTopComponent', () => {
  let component: VideojocsTopComponent;
  let fixture: ComponentFixture<VideojocsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojocsTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojocsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
