import { TestBed } from '@angular/core/testing';

import { TelaServiceService } from './tela-service.service';

describe('TelaServiceService', () => {
  let service: TelaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
