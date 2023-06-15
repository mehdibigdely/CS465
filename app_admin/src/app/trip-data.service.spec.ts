import { TestBed } from '@angular/core/testing';

import { TripDataService } from '../../services/trip-data.service';
// mport { TripDataService } from './services/trip';

describe('TripDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripDataService = TestBed.get(TripDataService);
    expect(service).toBeTruthy();
  });
});
