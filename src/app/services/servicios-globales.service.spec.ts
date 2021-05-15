import { TestBed } from '@angular/core/testing';

import { ServiciosGlobalesService } from './servicios-globales.service';

describe('ServiciosGlobalesService', () => {
  let service: ServiciosGlobalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosGlobalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
