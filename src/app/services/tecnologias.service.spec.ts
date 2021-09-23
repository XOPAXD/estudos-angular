import { TestBed } from '@angular/core/testing';

import { TecnologiasService } from './tecnologias.service';

describe('TecnologiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TecnologiasService = TestBed.get(TecnologiasService);
    expect(service).toBeTruthy();
  });
});
