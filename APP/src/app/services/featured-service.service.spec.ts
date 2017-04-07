import { TestBed, inject } from '@angular/core/testing';

import { FeaturedServiceService } from './featured-service.service';

describe('FeaturedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedServiceService]
    });
  });

  it('should ...', inject([FeaturedServiceService], (service: FeaturedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
