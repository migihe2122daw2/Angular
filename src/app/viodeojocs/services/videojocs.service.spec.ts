import { TestBed } from '@angular/core/testing';

import { VideojocsService } from './videojocs.service';

describe('VideojocsService', () => {
  let service: VideojocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideojocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
