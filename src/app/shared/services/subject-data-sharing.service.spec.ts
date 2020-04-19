import { TestBed, inject } from '@angular/core/testing';

import { SubjectDataSharingService } from './subject-data-sharing.service';

describe('SubjectDataSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectDataSharingService]
    });
  });

  it('should be created', inject([SubjectDataSharingService], (service: SubjectDataSharingService) => {
    expect(service).toBeTruthy();
  }));
});
