import { TestBed } from '@angular/core/testing';

import { SelectionCityService } from './selection-city.service';

describe('SelectionCityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionCityService = TestBed.get(SelectionCityService);
    expect(service).toBeTruthy();
  });
});
