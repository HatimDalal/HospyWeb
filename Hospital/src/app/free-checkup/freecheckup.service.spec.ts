import { TestBed } from '@angular/core/testing';

import { FreecheckupService } from './freecheckup.service';

describe('FreecheckupService', () => {
  let service: FreecheckupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreecheckupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
