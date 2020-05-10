import { TestBed, inject } from '@angular/core/testing';

import { UserMonitoringService } from './user-monitoring.service';

describe('UserMonitoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMonitoringService]
    });
  });

  it('should be created', inject([UserMonitoringService], (service: UserMonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
