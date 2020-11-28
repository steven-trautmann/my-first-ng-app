import { TestBed } from '@angular/core/testing';

import { SentenceService } from './sentence.service';

describe('SentenceServiceService', () => {
  let service: SentenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
