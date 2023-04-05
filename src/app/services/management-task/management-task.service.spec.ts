import { TestBed } from '@angular/core/testing';

import { ManagementTaskService } from './management-task.service';

describe('ManagementTaskService', () => {
  let service: ManagementTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
