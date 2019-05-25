import { TestBed } from '@angular/core/testing';

import { GeodataAntwerpService } from './geodata-antwerp.service';

describe('GeodataAntwerpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeodataAntwerpService = TestBed.get(GeodataAntwerpService);
    expect(service).toBeTruthy();
  });
});
