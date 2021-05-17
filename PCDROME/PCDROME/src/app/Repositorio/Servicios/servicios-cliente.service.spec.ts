import { TestBed } from '@angular/core/testing';

import { ServiciosClienteService } from './servicios-cliente.service';

describe('ServiciosClienteService', () => {
  let service: ServiciosClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
