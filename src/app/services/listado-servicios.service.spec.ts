import { TestBed } from '@angular/core/testing';

import { ListadoServiciosService } from './listado-servicios.service';

describe('ListadoServiciosService', () => {
  let service: ListadoServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
