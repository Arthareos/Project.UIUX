import { TestBed } from '@angular/core/testing';

import { ManagementHouseService } from './management-house.service';

describe('ManagementHouseService', () => {
  let service: ManagementHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
