import { TestBed } from '@angular/core/testing';

import { ServiesService } from './servies.service';

describe('ServiesService', () => {
  let service: ServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
