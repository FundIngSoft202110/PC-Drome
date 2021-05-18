import { TestBed } from '@angular/core/testing';

import { ServiciosCalificarService } from './servicios-calificar.service';

describe('ServiciosCalificarService', () => {
  let service: ServiciosCalificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosCalificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
