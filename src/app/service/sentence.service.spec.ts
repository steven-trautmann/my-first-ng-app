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

  it("should have and add to sentence function", () => {
    expect(service.addSentence).toBeTruthy();
  })

  it('should add to able to add to the sentences list', () => {
    let lengthBefore = service.sentences.length;
    service.addSentence("test");
    let lengthAfter = service.sentences.length;
    expect(lengthBefore).toBeLessThan(lengthAfter);
  })

  it("should have a get random sentence function", () => {
    expect(service.getRandom).toBeTruthy();
  })

  it("should get something back after calling the get random", () => {
    service.sentences = ["test1", "test2"];
    expect(service.getRandom()).toBeTruthy();
  })
});
